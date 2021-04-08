import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { aptitudes } from '../aptitudes/aptitudeData';
import { IMenuProps } from './shared-menu';
import { DesktopMenu } from './desktop-menu';
import { MobileMenu } from './mobile-menu';

export const Menu: React.FunctionComponent<IMenuProps> = (props) => {
  const aptitudeData = Object.values(aptitudes);
  const guideQuery = graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `;
  return (
    <StaticQuery
      query={guideQuery}
      render={(data) => (
        <>
          <MobileMenu aptitudes={aptitudeData} currentPath={props.currentPath} guideList={data} />
          <DesktopMenu aptitudes={aptitudeData} currentPath={props.currentPath} guideList={data} />
        </>
      )}
    />
  );
};
