import { Helmet } from "react-helmet-async";
import metadata from "../../data/metadata.json";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export function SEO({ title, description, keywords, image, url }: SEOProps) {
  const pageTitle = title || metadata.seo.title;
  const pageDescription = description || metadata.seo.description;
  const pageKeywords = keywords || metadata.seo.keywords;
  const ogImage = image || metadata.seo.image;
  const pageUrl = url || metadata.url;

  return (
    <Helmet>
      <html lang={metadata.language} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords.join(", ")} />
      <meta name="author" content={metadata.author} />
      <meta name="robots" content={metadata.seo.robots} />
      <meta name="theme-color" content={metadata.seo.themeColor} />

      {/* Open Graph */}
      <meta property="og:type" content={metadata.seo.type} />
      <meta property="og:title" content={title || metadata.seo.openGraph.title} />
      <meta property="og:description" content={description || metadata.seo.openGraph.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={metadata.seo.openGraph.site_name} />
      <meta property="og:locale" content={metadata.seo.openGraph.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
