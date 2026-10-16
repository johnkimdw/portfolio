import IpodPlayer from './IpodPlayer';
import TerminalPlayer from './TerminalPlayer';

// Player designs for the moon. Add a component here to make it selectable in
// config/design.js and on /lab. `videoSize` sizes the YouTube embed.
export const PLAYERS = {
  ipod: { label: 'ipod mini', component: IpodPlayer, videoSize: { width: 160, height: 90 } },
  terminal: { label: 'terminal window', component: TerminalPlayer, videoSize: { width: 200, height: 113 } },
};
