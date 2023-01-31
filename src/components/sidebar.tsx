import React from 'react'
import Script from "next/script";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <aside>
        <nav className="closed-on-mobile">
          <a href={"./"} className="secondary" id="toggle-docs-navigation">
            <div>👇 Table of content</div>
          </a>
          <details open>
            <summary>Getting started</summary>
            <div>
              <ul>
                <li><Link href="/docs" id="start-link" className="secondary">Introduction</Link></li>
                <li><Link href="/docs/download" id="download-link" className="secondary">Download</Link></li>
              </ul>
            </div>
          </details>
          <details open>
            <summary>Customize</summary>
            <div>
              <ul>
                {/* <li><Link href="./color" id="color-link" class="secondary">Color</Link></li> */}
                <li><a href="/docs/customize/themes" id="themes-link" className="secondary">Themes</a></li>
                <li><Link href="/docs/customize/css-variables" id="cssvar-link" className="secondary">CSS variables</Link></li>
              </ul>
            </div>
          </details>
          <details open>
            <summary>Layout</summary>
            <ul>
              <li><Link href="/docs/layout/containers" id="containers-link" className="secondary">Containers</Link></li>
              <li><Link href="/docs/layout/flex" id="flex-link" className="secondary">Flex</Link></li>
              <li><Link href="/docs/layout/grid" id="grid-link" className="secondary">Grid</Link></li>
              {/* <li><Link href="./scroller" id="scroller-link" class="secondary">Horizontal scroller</Link></li> */}
            </ul>
          </details>
          <details open>
            <summary>Contents</summary>
            <ul>
              <li><Link href="/docs/contents/typography" id="typography-link" className="secondary">Typography</Link></li>
              <li><Link href="/docs/contents/images" id="images-link" className="secondary">Images</Link></li>
              {/* <li><Link href="./buttons" id="buttons-link" class="secondary">Buttons</Link></li>
        <li><Link href="./forms" id="forms-link" class="secondary">Forms</Link></li>
        <li><Link href="./tables" id="tables-link" class="secondary">Tables</Link></li> */}
            </ul>
          </details>
          <details open>
            <summary>Forms</summary>
            <ul>
              {/* <li><Link href="./typography" id="typography-link" class="secondary">Typography</Link></li> */}
            </ul>
          </details>
          <details open>
            <summary>Components</summary>
            <ul>
              <li><Link href="/docs/components/accordion" id="accordion-link" className="secondary">Accordion</Link></li>
              <li><Link href="/docs/components/breadcrumb" id="breadcrumb-link" className="secondary">Breadcrumb</Link></li>
              <li><Link href="/docs/components/buttons" id="buttons-link" className="secondary">Buttons</Link></li>
              <li><Link href="/docs/components/cards" id="cards-link" className="secondary">Cards</Link></li>
              {/* <li><Link href="./dropdowns" id="dropdowns-link" class="secondary">Dropdowns</Link></li> */}
              {/* <li><Link href="./modal" id="modal-link" class="secondary">Modal</Link></li> */}
              <li><Link href="./navbar" id="navbar-link" className="secondary">Navbar</Link></li>
              {/* <li><Link href="./progress" id="progress-link" class="secondary">Progress</Link></li> */}
            </ul>
          </details>
          <details open>
            <summary>Utilities</summary>
            <ul>
            </ul>
          </details>
        </nav>

      </aside >
    </>
  )
}
