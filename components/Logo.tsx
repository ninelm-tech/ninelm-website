/* eslint-disable @next/next/no-img-element */

export default function Logo({ height = 26 }: { height?: number }) {
  return <img src="/logo%20primary%20color.png" alt="Ninelm" className="block w-auto" style={{ height }} />;
}
