import { withBase } from "../utils/publicUrl";

export function Logo({ className = "" }: { className?: string }) {
  return <img src={withBase("/images/logo.png")} alt="Pueblito Viejo Sandoná" className={className} />;
}
