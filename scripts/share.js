import { spawn, exec } from 'node:child_process';
import net from 'node:net';
import { bin } from 'cloudflared';

const port = process.env.PORT || process.argv[2] || 5173;

// ANSI color codes for terminal display
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  magenta: '\x1b[35m',
  dim: '\x1b[2m',
};

function checkPortOpen(targetPort, host = '127.0.0.1') {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(800);
    socket.on('connect', () => {
      socket.destroy();
      resolve(true);
    });
    socket.on('timeout', () => {
      socket.destroy();
      resolve(false);
    });
    socket.on('error', () => {
      socket.destroy();
      resolve(false);
    });
    socket.connect(targetPort, host);
  });
}

function copyToClipboard(text) {
  if (process.platform === 'win32') {
    exec(`powershell -NoProfile -Command "Set-Clipboard -Value '${text}'"`, () => {});
  } else if (process.platform === 'darwin') {
    exec(`pbcopy`, (proc) => proc?.stdin?.end(text));
  } else {
    exec(`xclip -selection clipboard`, (proc) => proc?.stdin?.end(text));
  }
}

async function main() {
  console.log(`\n${colors.cyan}${colors.bright}⚡ Initializing Cloudflare Tunnel for port ${port}...${colors.reset}\n`);

  const isOpen = await checkPortOpen(port);
  if (!isOpen) {
    console.log(`${colors.yellow}⚠️  Notice: Local server on port ${port} does not appear to be active yet.${colors.reset}`);
    console.log(`${colors.yellow}👉 Make sure to run ${colors.bright}'npm run dev'${colors.reset}${colors.yellow} in another terminal so the client can view your project!${colors.reset}\n`);
  }

  console.log(`${colors.dim}Connecting to Cloudflare edge network... Please wait a few seconds.${colors.reset}\n`);

  const tunnelProcess = spawn(bin, ['tunnel', '--url', `http://localhost:${port}`], {
    stdio: ['ignore', 'pipe', 'pipe'],
    windowsHide: true,
  });

  let tunnelFound = false;

  const handleOutput = (data) => {
    const text = data.toString();
    const match = text.match(/https:\/\/[a-zA-Z0-9-]+\.trycloudflare\.com/);

    if (match && !tunnelFound) {
      tunnelFound = true;
      const url = match[0];

      copyToClipboard(url);

      const divider = '='.repeat(66);
      console.log(`${colors.green}${divider}${colors.reset}`);
      console.log(`${colors.green}${colors.bright}  🚀 CLOUDFLARE PUBLIC TUNNEL IS READY!${colors.reset}`);
      console.log(`${colors.green}${divider}${colors.reset}`);
      console.log(`\n  ${colors.bright}🔗 Client Share Link:${colors.reset}`);
      console.log(`     ${colors.cyan}${colors.bright}${url}${colors.reset}\n`);
      console.log(`  ${colors.magenta}🎯 Forwarding to:${colors.reset}   http://localhost:${port}`);
      console.log(`  ${colors.green}📋 Copied to clipboard automatically!${colors.reset}`);
      console.log(`\n  ${colors.dim}💡 Anyone with this link can view your live app from anywhere.${colors.reset}`);
      console.log(`  ${colors.yellow}⏹️  Press Ctrl + C in this terminal to stop sharing.${colors.reset}`);
      console.log(`${colors.green}${divider}${colors.reset}\n`);
    }
  };

  tunnelProcess.stdout.on('data', handleOutput);
  tunnelProcess.stderr.on('data', handleOutput);

  tunnelProcess.on('error', (err) => {
    console.error(`\n${colors.yellow}Error starting cloudflared:${colors.reset}`, err.message);
  });

  tunnelProcess.on('exit', (code) => {
    if (code !== 0 && code !== null) {
      console.log(`\n${colors.dim}Cloudflare tunnel closed (exit code: ${code}).${colors.reset}`);
    } else {
      console.log(`\n${colors.cyan}Tunnel closed.${colors.reset}`);
    }
    process.exit(0);
  });

  const cleanup = () => {
    console.log(`\n${colors.yellow}Stopping Cloudflare Tunnel...${colors.reset}`);
    try {
      tunnelProcess.kill();
    } catch {
      // ignore
    }
    process.exit(0);
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
}

main();
