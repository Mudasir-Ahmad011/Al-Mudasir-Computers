type Props = {
  /** Pixel size of the square mark. */
  size?: number;
  className?: string;
};

/**
 * The Techie SoftHub mark: three nodes wired into one hub.
 * Source files and other formats live in /logos.
 */
export default function Logo({ size = 36, className }: Props) {
  return (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g transform="translate(0,43)">
        <g
          stroke="var(--logo-spoke)"
          strokeWidth="32"
          strokeLinecap="round"
        >
          <line x1="256" y1="256" x2="256" y2="84" />
          <line x1="256" y1="256" x2="404.96" y2="342" />
          <line x1="256" y1="256" x2="107.04" y2="342" />
        </g>
        <g fill="var(--logo-node)">
          <circle cx="256" cy="84" r="44" />
          <circle cx="404.96" cy="342" r="44" />
          <circle cx="107.04" cy="342" r="44" />
        </g>
        <circle cx="256" cy="256" r="64" fill="var(--accent)" />
      </g>
    </svg>
  );
}
