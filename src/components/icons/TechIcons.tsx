"use client";

import styled, { useTheme } from "styled-components";
import React, { Suspense } from "react";

const Placeholder = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
`;

const LazyIcon = ({ iconKey }: { iconKey: string }) => {
  const theme = useTheme();
  const sharedProps = { width: 60, height: 60, fill: theme.svg.fill };

  let Component;
  switch (iconKey.toLowerCase()) {
    case "javascript":
      Component = React.lazy(() =>
        import("./IconJavaScript").then((m) => ({ default: m.IconJavaScript })),
      );
      break;
    case "typescript":
      Component = React.lazy(() =>
        import("./IconTypeScript").then((m) => ({ default: m.IconTypeScript })),
      );
      break;
    case "react":
    case "react-native":
      Component = React.lazy(() =>
        import("./IconReact").then((m) => ({ default: m.IconReact })),
      );
      break;
    case "nextjs":
      Component = React.lazy(() =>
        import("./IconNextjs").then((m) => ({ default: m.IconNextjs })),
      );
      break;
    case "styled-component":
      Component = React.lazy(() =>
        import("./IconStyledComponent").then((m) => ({
          default: m.IconStyledComponent,
        })),
      );
      break;
    case "framer-motion":
      Component = React.lazy(() =>
        import("./IconFramerMotion").then((m) => ({
          default: m.IconFramerMotion,
        })),
      );
      break;
    case "zustand":
      Component = React.lazy(() =>
        import("./IconZustand").then((m) => ({ default: m.IconZustand })),
      );
      break;
    case "mobx":
      Component = React.lazy(() =>
        import("./IconMobx").then((m) => ({ default: m.IconMobx })),
      );
      break;
    case "mobx-state-tree":
      Component = React.lazy(() =>
        import("./IconMobxStateTree").then((m) => ({
          default: m.IconMobxStateTree,
        })),
      );
      break;
    case "redux":
    case "redux-thunk":
      Component = React.lazy(() =>
        import("./IconRedux").then((m) => ({ default: m.IconRedux })),
      );
      break;
    case "jquery":
      Component = React.lazy(() =>
        import("./IconJQuery").then((m) => ({ default: m.IconJQuery })),
      );
      break;
    case "tanstack-query":
      Component = React.lazy(() =>
        import("./IconTanStackQuery").then((m) => ({
          default: m.IconTanStackQuery,
        })),
      );
      break;
    case "signal-r":
      Component = React.lazy(() =>
        import("./IconSignalR").then((m) => ({ default: m.IconSignalR })),
      );
      break;
    case "cesium-js":
      Component = React.lazy(() =>
        import("./IconCesiumJS").then((m) => ({ default: m.IconCesiumJS })),
      );
      break;
    case "flv":
      Component = React.lazy(() =>
        import("./IconFLV").then((m) => ({ default: m.IconFLV })),
      );
      break;
    case "verdaccio":
      Component = React.lazy(() =>
        import("./IconVerdaccio").then((m) => ({ default: m.IconVerdaccio })),
      );
      break;
    case "storybook":
      Component = React.lazy(() =>
        import("./IconStorybook").then((m) => ({ default: m.IconStorybook })),
      );
      break;
    case "node-js":
      Component = React.lazy(() =>
        import("./IconNodeJS").then((m) => ({ default: m.IconNodeJS })),
      );
      break;
    case "express":
      Component = React.lazy(() =>
        import("./IconExpress").then((m) => ({ default: m.IconExpress })),
      );
      break;
    case "socket-io":
      Component = React.lazy(() =>
        import("./IconSocketIO").then((m) => ({ default: m.IconSocketIO })),
      );
      break;
    case "jest":
      Component = React.lazy(() =>
        import("./IconJest").then((m) => ({ default: m.IconJest })),
      );
      break;
    case "python":
      Component = React.lazy(() =>
        import("./IconPython").then((m) => ({ default: m.IconPython })),
      );
      break;
    case "fast-api":
      Component = React.lazy(() =>
        import("./IconFastAPI").then((m) => ({ default: m.IconFastAPI })),
      );
      break;
    case "mssql":
      Component = React.lazy(() =>
        import("./IconMSSQL").then((m) => ({ default: m.IconMSSQL })),
      );
      break;
    case "postgresql":
      Component = React.lazy(() =>
        import("./IconPostgreSQL").then((m) => ({ default: m.IconPostgreSQL })),
      );
      break;
    case "knex":
      Component = React.lazy(() =>
        import("./IconKnex").then((m) => ({ default: m.IconKnex })),
      );
      break;
    case "tensorflow":
      Component = React.lazy(() =>
        import("./IconTensorflow").then((m) => ({ default: m.IconTensorflow })),
      );
      break;
    case "dot-net-core":
      Component = React.lazy(() =>
        import("./IconDotNetCore").then((m) => ({ default: m.IconDotNetCore })),
      );
      break;
    case "selenium":
      Component = React.lazy(() =>
        import("./IconSelenium").then((m) => ({ default: m.IconSelenium })),
      );
      break;
    case "puppeteer":
      Component = React.lazy(() =>
        import("./IconPuppeteer").then((m) => ({ default: m.IconPuppeteer })),
      );
      break;
    case "docker":
      Component = React.lazy(() =>
        import("./IconDocker").then((m) => ({ default: m.IconDocker })),
      );
      break;
    case "sharepoint":
    case "spfx":
      Component = React.lazy(() =>
        import("./IconSharePoint").then((m) => ({ default: m.IconSharePoint })),
      );
      break;
    case "intune":
      Component = React.lazy(() =>
        import("./IconIntune").then((m) => ({ default: m.IconIntune })),
      );
      break;
    case "vercel":
      Component = React.lazy(() =>
        import("./IconVercel").then((m) => ({ default: m.IconVercel })),
      );
      break;
    case "git":
      Component = React.lazy(() =>
        import("./IconGit").then((m) => ({ default: m.IconGit })),
      );
      break;
    case "aws":
      Component = React.lazy(() =>
        import("./IconAWS").then((m) => ({ default: m.IconAWS })),
      );
      break;
    case "ci-cd":
      Component = React.lazy(() =>
        import("./IconCICD").then((m) => ({ default: m.IconCICD })),
      );
      break;
    case "grafana":
      Component = React.lazy(() =>
        import("./IconGrafana").then((m) => ({ default: m.IconGrafana })),
      );
      break;
    case "superset":
      Component = React.lazy(() =>
        import("./IconSuperset").then((m) => ({ default: m.IconSuperset })),
      );
      break;
    case "metabase":
      Component = React.lazy(() =>
        import("./IconMetabase").then((m) => ({ default: m.IconMetabase })),
      );
      break;
    case "k8s":
      Component = React.lazy(() =>
        import("./IconK8s").then((m) => ({ default: m.IconK8s })),
      );
      break;
    default:
      return <Placeholder />;
  }

  return <Component {...sharedProps} />;
};

export const TechIcon = (props: { iconKey: string }) => (
  <Suspense fallback={<Placeholder />}>
    <LazyIcon {...props} />
  </Suspense>
);
