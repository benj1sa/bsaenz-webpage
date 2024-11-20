import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello! I&apos;m Ben</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a computer engineering student, full-stack developer, and creator that loves{" "}
        <Highlight>building things</Highlight> that impacts lives.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Currently I&apos;m studying at{" "}
        <Highlight>University of Maryland - College Park</Highlight>.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
