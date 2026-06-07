export default function Page() {
  return (
    <main
      className="min-h-screen bg-[var(--base)] text-[var(--primary)]"
      style={{ fontFamily: "var(--font-ibm)" }}
    >
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-6 py-8 sm:px-10 sm:py-10">
        <header className="flex items-center justify-between border-b border-[var(--border)] pb-4">
          <div className="flex flex-col">
            <span
              className="text-3xl leading-none tracking-[0.18em] sm:text-4xl"
              style={{ fontFamily: "var(--font-handjet)" }}
            >
              CLUI
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.32em] text-[var(--dim)] sm:text-xs">
              Command Line User Interface
            </span>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--dim)]">
              macOS / Tauri / Terminal-first
            </p>
          </div>
        </header>

        <div className="grid flex-1 items-center gap-16 py-14 md:grid-cols-[1.3fr_0.7fr] md:gap-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--dim)]">
              Minimal terminal workspace
            </p>

            <h1
              className="font-handjet-vars max-w-4xl text-6xl leading-[0.9] tracking-[0.06em] sm:text-7xl md:text-8xl"
              style={{ fontFamily: "var(--font-handjet)" }}
            >
              A calmer way
              <br />
              to use the terminal.
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[var(--dim)] sm:text-base">
              CLUI is a minimalist terminal app for CLI power users. It uses the
              terminal engine behind VS Code and wraps it in a more ordered
              interface with flexible layout blocks and practical widgets.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="/downloads"
                className="inline-flex items-center justify-center border border-[var(--primary)] px-5 py-3 text-xs uppercase tracking-[0.24em] transition-opacity hover:opacity-70"
              >
                Download
              </a>

              <a
                href="https://github.com/angelkaragiozov/clui"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[var(--border)] px-5 py-3 text-xs uppercase tracking-[0.24em] text-[var(--dim)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                GitHub
              </a>
            </div>
          </div>

          <aside className="border border-[var(--border)] bg-[var(--glow)] p-5 sm:p-6">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
              <span className="text-xs uppercase tracking-[0.24em] text-[var(--dim)]">
                Session
              </span>
              <span className="text-xs text-[var(--dim)]">v0.1.x</span>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--dim)]">
                  Engine
                </p>
                <p className="mt-1 text-sm">VS Code terminal core</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--dim)]">
                  Layout
                </p>
                <p className="mt-1 text-sm">Flexible panels and widgets</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--dim)]">
                  Footprint
                </p>
                <p className="mt-1 text-sm">~25 MB, Tauri based</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--dim)]">
                  Focus
                </p>
                <p className="mt-1 text-sm">Ordered terminal experience</p>
              </div>
            </div>

            <div className="mt-6 border-t border-[var(--border)] pt-4">
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] uppercase tracking-[0.2em] text-[var(--dim)]">
                <div className="border border-[var(--border)] px-2 py-3">CLI</div>
                <div className="border border-[var(--border)] px-2 py-3">Tauri</div>
                <div className="border border-[var(--border)] px-2 py-3">macOS</div>
              </div>
            </div>
          </aside>
        </div>

        <footer className="flex flex-col gap-2 border-t border-[var(--border)] pt-4 text-[10px] uppercase tracking-[0.22em] text-[var(--dim)] sm:flex-row sm:items-center sm:justify-between">
          <span>Command Line User Interface</span>
          <span>Minimal / Ordered / Terminal-first</span>
        </footer>
      </section>
    </main>
  );
}
