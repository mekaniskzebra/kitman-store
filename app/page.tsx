import ColorPalette from "@/components/layout/ColorPalette";
import { ScrollReveal } from "components/ScrollReveal";
import WorkProcess from "components/WorkProcess";


export const metadata = {
  description:
    'Bevara identiteten, bär din historia.',
  openGraph: {
    type: 'website'
  }
};

export default function Home() {


  return (
    <main>
      <ScrollReveal>
        <WorkProcess />
      </ScrollReveal>
      <ScrollReveal>
        <ColorPalette />
      </ScrollReveal>
    </main>
  )
}
