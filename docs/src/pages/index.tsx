import React from 'react';
import { Layout } from '../components/layout';
import styles from './index.module.scss';
import './index.scss';
import { PageHeader } from '../components/page-header';
import OliveHelpsLogo from '../components/olive-helps-logo';
import { languages, downloadMacUrl, downloadWindowsUrl } from '../references';
import { Section } from '../components/section';
import { aptitudes, IAptitudeData } from '../components/aptitudes/aptitudeData';
import { graphql, Link, PageProps } from 'gatsby';
import { buildAptitudePath } from '../components/aptitudes/aptitudePaths';
import { mapGuidePages } from '../components/menu/shared-menu';
import { IMarkdownRemarkQuery } from '../queries';

interface LanguageBlockProps {
  language: string;
  repoURL: string;
  docURL?: string;
  docURLNotice?: string;
}

const LanguageBlock: React.FunctionComponent<LanguageBlockProps> = (props) => (
  <article className={styles.downloadItem}>
    <h3 className={styles.languageTitle}>{props.language}</h3>
    <a href={props.repoURL} className={styles.ldkLink}>
      GitHub
    </a>
    <br />
    {props.docURL && (
      <a href={props.docURL} className={styles.ldkLink}>
        Documentation
      </a>
    )}
    {props.docURLNotice && <span className={styles.ldkLink}>{props.docURLNotice}</span>}
  </article>
);

const AptitudeItem: React.FunctionComponent<{
  aptitude: IAptitudeData;
}> = (props) => {
  return (
    <div className={styles.aptitudeItem}>
      <h3 className={styles.aptitudeTitle}>
        <Link to={buildAptitudePath(props.aptitude)}>{props.aptitude.name}</Link>
      </h3>
      <p className={styles.aptitudeDescription}>{props.aptitude.description}</p>
    </div>
  );
};

const GuideItem: React.FunctionComponent<IFrontmatterProps> = (props) => {
  return (
    <div className={styles.aptitudeItem}>
      <h3 className={styles.aptitudeTitle}>
        <Link to={props.slug}>{props.title}</Link>
      </h3>
      <p className={styles.aptitudeDescription}>{props.description}</p>
    </div>
  );
};

export default function Home(props: PageProps<IMarkdownRemarkQuery<IFrontmatterProps>>) {
  const aptitudeItems = Object.values(aptitudes).map((aptitude) => {
    return <AptitudeItem aptitude={aptitude} key={aptitude.name} />;
  });
  const guideItems = mapGuidePages(props.data).map((guide) => <GuideItem {...guide} />);
  const title = (
    <>
      <OliveHelpsLogo className={styles.headerImage} /> <br />
      Developer Hub
    </>
  );
  return (
    <Layout>
      <PageHeader title={title} />
      <Section sectionClassName={styles.sectionBackground}>
        <h2 className={styles.sectionTitle}>Download</h2>
        <p>Download the Olive Helps app.</p>
        <div className={styles.downloadCollection}>
          <article className={styles.downloadItem}>
            <a href={downloadWindowsUrl} className={styles.downloadLink}>
              Windows
            </a>
          </article>
          <article className={styles.downloadItem}>
            <a className={styles.downloadLink} href={downloadMacUrl}>
              MacOS
            </a>
          </article>
        </div>
      </Section>
      <Section sectionClassName={styles.sectionBackground}>
        <h2 className={styles.sectionTitle}>Get the LDK</h2>
        <p>Get the LDK and start building!</p>
        <div className={styles.downloadCollection}>
          {languages.map((language) => (
            <LanguageBlock {...language} key={language.language} />
          ))}
        </div>
      </Section>
      <Section sectionClassName={styles.sectionBackground}>
        <h2 className={styles.sectionTitle}>See the Aptitudes</h2>
        <p>
          Olive Helps offers different aptitudes that enable you to build Loops that help users do
          their job
        </p>
        <div className={styles.aptitudeList}>{aptitudeItems}</div>
      </Section>
      <Section sectionClassName={styles.sectionBackground}>
        <h2 className={styles.sectionTitle}>Read the Guides</h2>
        <p>We have guides available to help you at various steps.</p>
        <div className={styles.aptitudeList}>{guideItems}</div>
      </Section>
      <Section sectionClassName={styles.sectionBackground}>
        <h2 className={styles.sectionTitle}>Getting Help</h2>
        <p>
          Email your Olive Helps developer contact if you need any help! We're here to help you
          succeed!
        </p>
      </Section>
    </Layout>
  );
}

export interface IFrontmatterProps {
  slug: string;
  title: string;
  description: string;
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }, limit: 1000) {
      edges {
        node {
          frontmatter {
            slug
            title
            description
          }
        }
      }
    }
  }
`;