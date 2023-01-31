import Link from "next/link";
import Darkmode from "./darkmode";

export default function Navbar() {
  return (
    <>
      <nav style={{ backgroundColor: 'var(--background-color)', zIndex: 99, borderBottom: '1px solid var(--muted-border-color)' }} className="container-fluid fixed">
        <ul>
          <li><Link href="/">Stuff CSS</Link></li>
          <li><Link href="/docs/">Docs</Link></li>/
          <li><Link href="/themes/">Themes</Link></li>/
          <li><Link href="/examples/">Examples</Link></li>
        </ul>
        <ul>
          {/* <Darkmode /> */}
        </ul>
      </nav>
      <br />
    </>
  )
}
