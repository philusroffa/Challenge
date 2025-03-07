"use client"

import { useState, useEffect } from "react"
import { ExternalLink } from "lucide-react"
import LinkCard from "@/components/link-card"

// Define the link data structure
interface Link {
  id: string
  name: string
  url: string
  description?: string
}

// Link data
const links: Link[] = [
  {
    id: "og-labs",
    name: "OG Labs",
    url: "https://faucet.0g.ai/",
    description: "Blockchain faucet for OG Labs",
  },
  {
    id: "klok-ai",
    name: "Klok AI",
    url: "https://klokapp.ai?referral_code=9FM4QFA3",
    description: "AI-powered productivity tool",
  },
  {
    id: "assister",
    name: "Assister",
    url: "https://build.assisterr.ai/",
    description: "AI assistant building platform",
  },
  {
    id: "liqfinity",
    name: "Liqfinity",
    url: "https://app.testnet.liqfinity.com/",
    description: "Testnet for Liqfinity platform",
  },
  {
    id: "public-ai",
    name: "PublicAI",
    url: "https://beta.publicai.io/?r=KVpbe",
    description: "Public AI beta platform",
  },
]

export default function LinkGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredLinks, setFilteredLinks] = useState(links)

  useEffect(() => {
    // Listen for changes in the search input
    const searchInput = document.getElementById("search") as HTMLInputElement

    const handleSearch = () => {
      const term = searchInput.value.toLowerCase()
      setSearchTerm(term)

      const filtered = links.filter(
        (link) =>
          link.name.toLowerCase().includes(term) || (link.description && link.description.toLowerCase().includes(term)),
      )
      setFilteredLinks(filtered)
    }

    searchInput.addEventListener("input", handleSearch)

    return () => {
      searchInput.removeEventListener("input", handleSearch)
    }
  }, [])

  return (
    <div>
      {filteredLinks.length === 0 ? (
        <div className="text-center py-12">
          <ExternalLink className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-xl font-medium text-foreground mb-2">No links found</h2>
          <p className="text-muted-foreground">Try adjusting your search term</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLinks.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>
      )}
    </div>
  )
}

