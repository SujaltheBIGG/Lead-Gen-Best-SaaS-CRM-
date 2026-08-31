import { styled } from '@linaria/react';
import { Link } from 'react-router-dom';
import { AppPath } from 'twenty-shared/types';
import { themeCssVariables } from 'twenty-ui/theme-constants';

const Page = styled.div`
  background:
    radial-gradient(circle at top, rgba(95, 91, 255, 0.18), transparent 28%),
    linear-gradient(180deg, #090b13 0%, #111827 48%, #0b1020 100%);
  color: #f5f7ff;
  min-height: 100dvh;
  width: 100%;
`;

const MaxWidth = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 24px 80px;
`;

const Navbar = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 24px 0 18px;
`;

const Brand = styled.div`
  align-items: center;
  color: #ffffff;
  display: flex;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.04em;
`;

const BrandDot = styled.span`
  background: linear-gradient(135deg, #8b5cf6, #5eead4);
  border-radius: 999px;
  display: inline-block;
  height: 10px;
  margin-right: 10px;
  width: 10px;
`;

const NavLinks = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.92rem;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;

const PrimaryButton = styled(Link)`
  align-items: center;
  background: linear-gradient(135deg, #8b5cf6 0%, #4f46e5 100%);
  border-radius: 999px;
  box-shadow: 0 18px 40px rgba(79, 70, 229, 0.42);
  color: #ffffff;
  display: inline-flex;
  font-weight: 600;
  justify-content: center;
  min-height: 44px;
  padding: 0 20px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 22px 46px rgba(79, 70, 229, 0.52);
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled(Link)`
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  color: #f8fafc;
  display: inline-flex;
  font-weight: 600;
  justify-content: center;
  min-height: 44px;
  padding: 0 20px;
  text-decoration: none;
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.24);
  }
`;

const Hero = styled.section`
  align-items: center;
  display: grid;
  gap: 42px;
  grid-template-columns: 1.05fr 0.95fr;
  min-height: 580px;
  padding-top: 32px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    min-height: unset;
    padding-top: 16px;
  }
`;

const HeroContent = styled.div`
  max-width: 620px;
`;

const Eyebrow = styled.div`
  color: #a5b4fc;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: 18px;
  text-transform: uppercase;
`;

const Headline = styled.h1`
  color: #ffffff;
  font-size: clamp(2.8rem, 6vw, 5rem);
  letter-spacing: -0.065em;
  line-height: 0.95;
  margin: 0;
`;

const Subhead = styled.p`
  color: rgba(226, 232, 240, 0.8);
  font-size: 1.15rem;
  line-height: 1.6;
  margin: 22px 0 30px;
  max-width: 560px;
`;

const CTAGroup = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

const TrustRow = styled.div`
  color: rgba(191, 219, 254, 0.8);
  font-size: 0.9rem;
  margin-top: 28px;
`;

const HeroVisual = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const DashboardCard = styled.div`
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 28px;
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.7);
  max-width: 560px;
  overflow: hidden;
  width: 100%;
`;

const DashboardTopbar = styled.div`
  align-items: center;
  background: rgba(15, 23, 42, 0.95);
  border-bottom: 1px solid rgba(148, 163, 184, 0.18);
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  padding: 16px 20px;
`;

const ControlDot = styled.span<{ color: string }>`
  background: ${(props) => props.color};
  border-radius: 999px;
  display: inline-block;
  height: 10px;
  width: 10px;
`;

const DashboardBody = styled.div`
  display: grid;
  gap: 24px;
  padding: 24px;
`;

const MetricRow = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

const MetricCard = styled.div`
  background: rgba(30, 41, 59, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 16px;
  padding: 16px;
`;

const MetricLabel = styled.div`
  color: rgba(148, 163, 184, 0.9);
  font-size: 0.72rem;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const MetricValue = styled.div`
  color: white;
  font-size: 1.6rem;
  letter-spacing: -0.05em;
`;

const Table = styled.div`
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 18px;
  overflow: hidden;
`;

const TableHeader = styled.div`
  color: rgba(191, 219, 254, 0.85);
  display: grid;
  gap: 12px;
  grid-template-columns: 1.4fr 0.8fr 0.8fr;
  padding: 14px 18px;
`;

const TableRow = styled.div`
  border-top: 1px solid rgba(148, 163, 184, 0.18);
  color: rgba(224, 234, 255, 0.85);
  display: grid;
  gap: 12px;
  grid-template-columns: 1.4fr 0.8fr 0.8fr;
  padding: 14px 18px;
`;

const Section = styled.section`
  padding-top: 44px;
`;

const SectionHeader = styled.div`
  margin: 0 auto 32px;
  max-width: 720px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #ffffff;
  font-size: clamp(2rem, 4vw, 3.2rem);
  letter-spacing: -0.06em;
  line-height: 1.04;
  margin: 0;
`;

const SectionCopy = styled.p`
  color: rgba(191, 203, 222, 0.8);
  line-height: 1.7;
  margin: 14px auto 0;
  max-width: 640px;
`;

const FeatureGrid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  min-height: 220px;
  padding: 24px;
`;

const FeatureBadge = styled.div`
  align-items: center;
  background: rgba(99, 102, 241, 0.2);
  border: 1px solid rgba(129, 140, 248, 0.3);
  border-radius: 999px;
  color: #c4b5fd;
  display: inline-flex;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 20px;
  padding: 8px 10px;
  text-transform: uppercase;
  width: fit-content;
`;

const FeatureTitle = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  letter-spacing: -0.04em;
  margin: 0 0 10px;
`;

const FeatureText = styled.p`
  color: rgba(191, 203, 222, 0.8);
  line-height: 1.7;
  margin: 0;
`;

const CTASection = styled.section`
  align-items: center;
  background: rgba(17, 24, 39, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  margin-top: 56px;
  padding: 28px 28px;
`;

const CTAHeading = styled.h3`
  color: #ffffff;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  letter-spacing: -0.05em;
  margin: 0;
`;

const Footer = styled.footer`
  color: rgba(191, 203, 222, 0.7);
  display: flex;
  font-size: 0.9rem;
  justify-content: space-between;
  margin-top: 40px;
  padding-bottom: 32px;

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }
`;

export const LandingPage = () => {
  return (
    <Page>
      <MaxWidth>
        <Navbar>
          <Brand>
            <BrandDot />
            Twenty
          </Brand>
          <NavLinks>
            <NavLink to={AppPath.SignInUp}>Product</NavLink>
            <NavLink to={AppPath.SignInUp}>Customers</NavLink>
            <NavLink to={AppPath.SignInUp}>Pricing</NavLink>
            <NavLink to={AppPath.SignInUp}>Docs</NavLink>
            <SecondaryButton to={AppPath.SignInUp}>Log in</SecondaryButton>
            <PrimaryButton to={AppPath.SignInUp}>Get started</PrimaryButton>
          </NavLinks>
        </Navbar>

        <Hero>
          <HeroContent>
            <Eyebrow>Open-source CRM for modern teams</Eyebrow>
            <Headline>Build your CRM at AI speed.</Headline>
            <Subhead>
              Replace brittle spreadsheets and rigid vendor workflows with a CRM
              that your team can shape, automate, and extend in real time.
            </Subhead>
            <CTAGroup>
              <PrimaryButton to={AppPath.SignInUp}>Start free</PrimaryButton>
              <SecondaryButton to={AppPath.SignInUp}>Book a demo</SecondaryButton>
            </CTAGroup>
            <TrustRow>Trusted by teams shipping faster with fewer tools.</TrustRow>
          </HeroContent>

          <HeroVisual>
            <DashboardCard>
              <DashboardTopbar>
                <ControlDot color="#f87171" />
                <ControlDot color="#fbbf24" />
                <ControlDot color="#34d399" />
              </DashboardTopbar>
              <DashboardBody>
                <MetricRow>
                  <MetricCard>
                    <MetricLabel>Revenue</MetricLabel>
                    <MetricValue>$2.6M</MetricValue>
                  </MetricCard>
                  <MetricCard>
                    <MetricLabel>Pipeline</MetricLabel>
                    <MetricValue>148</MetricValue>
                  </MetricCard>
                  <MetricCard>
                    <MetricLabel>Win rate</MetricLabel>
                    <MetricValue>41%</MetricValue>
                  </MetricCard>
                </MetricRow>

                <Table>
                  <TableHeader>
                    <div>Company</div>
                    <div>Stage</div>
                    <div>Value</div>
                  </TableHeader>
                  <TableRow>
                    <div>Anthropic</div>
                    <div>Qualified</div>
                    <div>$500k</div>
                  </TableRow>
                  <TableRow>
                    <div>Slack</div>
                    <div>Proposal</div>
                    <div>$240k</div>
                  </TableRow>
                  <TableRow>
                    <div>Notion</div>
                    <div>Expansion</div>
                    <div>$180k</div>
                  </TableRow>
                </Table>
              </DashboardBody>
            </DashboardCard>
          </HeroVisual>
        </Hero>

        <Section>
          <SectionHeader>
            <SectionTitle>Everything your GTM team needs.</SectionTitle>
            <SectionCopy>
              Manage accounts, pipeline, and workflows in one flexible system that
              feels modern without sacrificing control.
            </SectionCopy>
          </SectionHeader>

          <FeatureGrid>
            <FeatureCard>
              <FeatureBadge>Custom data</FeatureBadge>
              <FeatureTitle>Model your business.</FeatureTitle>
              <FeatureText>
                Add objects, fields, views, and relations without waiting for a
                vendor ticket.
              </FeatureText>
            </FeatureCard>
            <FeatureCard>
              <FeatureBadge>AI ready</FeatureBadge>
              <FeatureTitle>Move faster with AI.</FeatureTitle>
              <FeatureText>
                Turn routine work into real-time automations with native AI chat,
                prompts, and workflows.
              </FeatureText>
            </FeatureCard>
            <FeatureCard>
              <FeatureBadge>Open source</FeatureBadge>
              <FeatureTitle>Own your stack.</FeatureTitle>
              <FeatureText>
                Self-host with full control over infrastructure, data, and
                compliance requirements.
              </FeatureText>
            </FeatureCard>
          </FeatureGrid>
        </Section>

        <CTASection>
          <CTAHeading>Ready to make your CRM work for you?</CTAHeading>
          <PrimaryButton to={AppPath.SignInUp}>Enter the app</PrimaryButton>
        </CTASection>

        <Footer>
          <div>Twenty — Build the system your team actually needs.</div>
          <div>© 2026</div>
        </Footer>
      </MaxWidth>
    </Page>
  );
};
