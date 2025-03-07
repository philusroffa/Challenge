import { ExternalLink } from "lucide-react"

interface Link {
  id: string
  name: string
  url: string
  description?: string
}

interface LinkCardProps {
  link: Link
}

export default function LinkCard({ link }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors duration-200 h-full"
    >
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-medium text-card-foreground mb-2">{link.name}</h2>
        <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
      </div>
      {link.description && <p className="text-muted-foreground text-sm mt-2">{link.description}</p>}
      <div className="mt-4 text-xs text-muted-foreground truncate">{link.url}</div>
    </a>
  )
}

