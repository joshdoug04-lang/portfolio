import { profile } from "@/data/profile";
import Section from "./Section";
import Text from "./Text";

export default function About() {
  return (
    <Section id="about" label="About" title="A bit about me.">
      <div className="space-y-6 text-lg leading-relaxed text-muted">
        {profile.about.map((paragraph, index) => (
          <p key={index}>
            <Text>{paragraph}</Text>
          </p>
        ))}
      </div>
    </Section>
  );
}
