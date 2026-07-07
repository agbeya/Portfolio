// src/components/TechIcon.jsx
import React from "react";
import {
  SiPython,
  SiApachespark,
  SiDatabricks,
  SiSnowflake,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiJira,
  SiConfluence,
  SiStreamlit,
  SiLaravel,
  SiBootstrap,
  SiLinux,
  SiScala,
  SiOpenjdk,
  SiJavascript,
  SiTalend,
  SiKubernetes,
  SiGooglecloud,
  SiGnubash,
  SiApachehive,
} from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";
import { FaSalesforce } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";

// Ordre important : les correspondances les plus spécifiques d'abord.
const ICON_RULES = [
  [/azure\s*devops/i, VscAzureDevops],
  [/azure/i, TbBrandAzure],
  [/hive\s*metastore/i, SiApachehive],
  [/pyspark|apache\s*spark|^spark$|spark\s*sql/i, SiApachespark],
  [/databricks/i, SiDatabricks],
  [/snowflake/i, SiSnowflake],
  [/postgresql|postgres/i, SiPostgresql],
  [/docker/i, SiDocker],
  [/github/i, SiGithub],
  [/\bgit\b/i, SiGit],
  [/jira/i, SiJira],
  [/confluence/i, SiConfluence],
  [/streamlit/i, SiStreamlit],
  [/laravel/i, SiLaravel],
  [/bootstrap/i, SiBootstrap],
  [/linux/i, SiLinux],
  [/scala/i, SiScala],
  [/\bjava\b|jee/i, SiOpenjdk],
  [/javascript/i, SiJavascript],
  [/talend/i, SiTalend],
  [/kubernetes/i, SiKubernetes],
  [/gcp|google\s*cloud/i, SiGooglecloud],
  [/salesforce/i, FaSalesforce],
  [/bash/i, SiGnubash],
  [/python/i, SiPython],
];

export function getTechIcon(name) {
  if (!name) return null;
  const match = ICON_RULES.find(([re]) => re.test(name));
  return match ? match[1] : null;
}

export function TechIcon({ name, className = "h-3.5 w-3.5" }) {
  const Icon = getTechIcon(name);
  if (!Icon) return null;
  return <Icon className={className} aria-hidden />;
}
