import {
  LocalAirportIcon,
  PenIcon,
  SailingIcon,
  SparkleIcon,
  TravelExploreIcon,
} from "@/components/ui/icons";

const TILES = [
  { key: "pen", Icon: PenIcon, filled: false },
  { key: "sailing", Icon: SailingIcon, filled: true },
  { key: "airport", Icon: LocalAirportIcon, filled: true },
  { key: "explore", Icon: TravelExploreIcon, filled: true },
] as const;

/**
 * Mission illustration: a stack of notification-like cards that swipe through
 * one icon at a time (pen → sailing → airport → explore), with the same
 * sparkle animation as the hero. Pure CSS; no JS timer.
 */
export function MissionIllustration() {
  return (
    <div className="mission__illustration" aria-hidden="true">
      <span className="mission__sparkle mission__sparkle--1">
        <SparkleIcon />
      </span>
      <span className="mission__sparkle mission__sparkle--2">
        <SparkleIcon />
      </span>
      <span className="mission__sparkle mission__sparkle--3">
        <SparkleIcon />
      </span>

      <div className="mission__stack">
        {TILES.map(({ key, Icon, filled }, index) => (
          <div
            key={key}
            className={`mission__tile mission__tile--delay-${index + 1}${
              filled ? " mission__tile--filled" : ""
            }`}
          >
            <Icon />
            <span className="mission__tile-lines">
              <span className="mission__tile-line mission__tile-line--wide" />
              <span className="mission__tile-line mission__tile-line--narrow" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
