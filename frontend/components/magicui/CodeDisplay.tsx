"use client";

import { FileIcon, Copy } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

interface CodeDisplayProps {
  code: string;
  language: string;
  filename: string;
  lightTheme: string;
  darkTheme: string;
}

export function CodeDisplay({
  code,
  language,
  filename,
  lightTheme,
  darkTheme,
}: CodeDisplayProps) {
  const { theme, systemTheme } = useTheme();
  const [highlightedCode, setHighlightedCode] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    const selectedTheme = currentTheme === "dark" ? darkTheme : lightTheme;

    async function highlightCode() {
      const highlighted = await codeToHtml(code, {
        lang: language,
        theme: selectedTheme,
      });
      setHighlightedCode(highlighted);
    }

    highlightCode();
  }, [theme, systemTheme, code, language, lightTheme, darkTheme]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderCode = () => {
    if (highlightedCode) {
      return (
        <div
          className="h-full overflow-auto bg-background font-mono text-xs [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-4 [&_code]:break-all"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      );
    } else {
      return (
        <pre className="h-full overflow-auto break-all bg-background p-4 font-mono text-xs text-foreground">
          {code}
        </pre>
      );
    }
  };

  return (
    <div className="mx-auto w-full">
      <div className="relative w-full overflow-hidden rounded-xl border border-border">
        <div className="flex items-center justify-between bg-accent p-2 text-sm text-foreground">
          <div className="flex items-center">
            <FileIcon className="mr-2 h-4 w-4" />
            {filename}
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 rounded px-2 py-1 hover:bg-background/10"
          >
            <Copy className="h-4 w-4" />
            <span>{copied ? "Copied!" : "Copy"}</span>
          </button>
        </div>
        {renderCode()}
      </div>
    </div>
  );
}