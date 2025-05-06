import Image from "next/image";

export const Icons = {
  Logo: () => (
    <Image
      src="/kickLogo.png"
      alt="logo"
      width={32}
      height={32}
      className="h-8 w-auto"
    />
  ),
  Kickarcade: () => (
    <Image
      src="/vec22.png"
      alt="kick-arcade"
      width={20}
      height={20}
      className="h-5 w-5"
    />
  ),
  Kicktrivia: () => (
    <Image
      src="/vec23.png"
      alt="kick-trivia"
      width={20}
      height={20}
      className="h-5 w-5"
    />
  ),
  Leaderboard: () => (
    <Image
      src="/vec2.png"
      alt="leaderboard"
      width={20}
      height={20}
      className="h-5 w-5"
    />
  ),
  Wincash: () => (
    <Image
      src="/iconhandcash.png"
      alt="win-and-cash"
      width={20}
      height={20}
      className="h-5 w-5"
    />
  ),
  Invitefreind: () => (
    <Image
      src="/vec3.png"
      alt="invite-friends"
      width={20}
      height={20}
      className="h-5 w-5"
    />
  ),
  Support: () => (
    <Image
      src="/vec4.png"
      alt="support"
      width={20}
      height={20}
      className="h-5 w-5"
    />
  ),
  Profile: () => (
    <Image
      src="/vec5.png"
      alt="support"
      width={20}
      height={20}
      className="h-5 w-5"
    />
  ),
  Settings: () => (
    <Image
      src="/settings.png"
      alt="settings"
      width={20}
      height={20}
      className="h-5 w-5"
    />
  ),
};
