"use client";

import styled, { useTheme } from "styled-components";
import { IconReact } from "./IconReact";
import { IconNextjs } from "./IconNextjs";
import { IconJavaScript } from "./IconJavaScript";
import { IconTypeScript } from "./IconTypeScript";
import { IconStyledComponent } from "./IconStyledComponent";
import { IconFramerMotion } from "./IconFramerMotion";
import { IconTanStackQuery } from "./IconTanStackQuery";
import { IconNodeJS } from "./IconNodeJS";
import { IconPython } from "./IconPython";
import { IconFastAPI } from "./IconFastAPI";
import { IconPostgreSQL } from "./IconPostgreSQL";
import { IconDocker } from "./IconDocker";
import { IconAWS } from "./IconAWS";
import { IconVercel } from "./IconVercel";
import { IconGit } from "./IconGit";
import { IconMobx } from "./IconMobx";
import { IconMobxStateTree } from "./IconMobxStateTree";
import { IconZustand } from "./IconZustand";
import { IconRedux } from "./IconRedux";
import { IconJQuery } from "./IconJQuery";
import { IconSignalR } from "./IconSignalR";
import { IconCesiumJS } from "./IconCesiumJS";
import { IconFLV } from "./IconFLV";
import { IconVerdaccio } from "./IconVerdaccio";
import { IconStorybook } from "./IconStorybook";
import { IconExpress } from "./IconExpress";
import { IconSocketIO } from "./IconSocketIO";
import { IconJest } from "./IconJest";
import { IconMSSQL } from "./IconMSSQL";
import { IconKnex } from "./IconKnex";
import { IconTensorflow } from "./IconTensorflow";
import { IconDotNetCore } from "./IconDotNetCore";
import { IconSelenium } from "./IconSelenium";
import { IconPuppeteer } from "./IconPuppeteer";
import { IconSharePoint } from "./IconSharePoint";
import { IconIntune } from "./IconIntune";
import { IconCICD } from "./IconCICD";
import { IconGrafana } from "./IconGrafana";
import { IconSuperset } from "./IconSuperset";
import { IconMetabase } from "./IconMetabase";
import { IconK8s } from "./IconK8s";

const Placeholder = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
`;

export const TechIcon = ({ iconKey }: { iconKey: string }) => {
  const theme = useTheme();
  const sharedProps = { width: 60, height: 60, fill: theme.svg.fill };

  switch (iconKey.toLowerCase()) {
    case "javascript":
      return <IconJavaScript {...sharedProps} />;
    case "typescript":
      return <IconTypeScript {...sharedProps} />;
    case "react":
    case "react-native":
      return <IconReact {...sharedProps} />;
    case "nextjs":
      return <IconNextjs {...sharedProps} />;
    case "styled-component":
      return <IconStyledComponent {...sharedProps} />;
    case "framer-motion":
      return <IconFramerMotion {...sharedProps} />;
    case "zustand":
      return <IconZustand {...sharedProps} />;
    case "mobx":
      return <IconMobx {...sharedProps} />;
    case "mobx-state-tree":
      return <IconMobxStateTree {...sharedProps} />;
    case "redux":
    case "redux-thunk":
      return <IconRedux {...sharedProps} />;
    case "jquery":
      return <IconJQuery {...sharedProps} />;
    case "tanstack-query":
      return <IconTanStackQuery {...sharedProps} />;
    case "signal-r":
      return <IconSignalR {...sharedProps} />;
    case "cesium-js":
      return <IconCesiumJS {...sharedProps} />;
    case "flv":
      return <IconFLV {...sharedProps} />;
    case "verdaccio":
      return <IconVerdaccio {...sharedProps} />;
    case "storybook":
      return <IconStorybook {...sharedProps} />;
    case "node-js":
      return <IconNodeJS {...sharedProps} />;
    case "express":
      return <IconExpress {...sharedProps} />;
    case "socket-io":
      return <IconSocketIO {...sharedProps} />;
    case "jest":
      return <IconJest {...sharedProps} />;
    case "python":
      return <IconPython {...sharedProps} />;
    case "fast-api":
      return <IconFastAPI {...sharedProps} />;
    case "mssql":
      return <IconMSSQL {...sharedProps} />;
    case "postgresql":
      return <IconPostgreSQL {...sharedProps} />;
    case "knex":
      return <IconKnex {...sharedProps} />;
    case "tensorflow":
      return <IconTensorflow {...sharedProps} />;
    case "dot-net-core":
      return <IconDotNetCore {...sharedProps} />;
    case "selenium":
      return <IconSelenium {...sharedProps} />;
    case "puppeteer":
      return <IconPuppeteer {...sharedProps} />;
    case "docker":
      return <IconDocker {...sharedProps} />;
    case "sharepoint":
    case "spfx":
      return <IconSharePoint {...sharedProps} />;
    case "intune":
      return <IconIntune {...sharedProps} />;
    case "vercel":
      return <IconVercel {...sharedProps} />;
    case "git":
      return <IconGit {...sharedProps} />;
    case "aws":
      return <IconAWS {...sharedProps} />;
    case "ci-cd":
      return <IconCICD {...sharedProps} />;
    case "grafana":
      return <IconGrafana {...sharedProps} />;
    case "superset":
      return <IconSuperset {...sharedProps} />;
    case "metabase":
      return <IconMetabase {...sharedProps} />;
    case "k8s":
      return <IconK8s {...sharedProps} />;
    default:
      return <Placeholder />;
  }
};
