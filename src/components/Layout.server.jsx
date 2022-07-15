import { Suspense } from "react";
import { useShopQuery, CacheLong, gql, Seo, useLocalization } from "@shopify/hydrogen";
import Header from "./Header/Header.client";
import HeroSlider from "./HeroSlider/HeroSlider.client";
import { MEDIA_FRAGMENT,PRODUCT_CARD_FRAGMENT } from "../lib/fragment";
import FeatureCollections from "./FeatureCollections/FeatureCollections.client";

const HEADER_MENU_HANDLE = 'main-menu';
const FOOTER_MENU_HANDLE = 'footer';
/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
export function Layout({ children }) {
  const {
    language: {isoCode: languageCode},
    country:{isoCode:countryCode},
  } = useLocalization();

  const {data} = useShopQuery({
    query: SHOP_QUERY,
    variables: {
      language: languageCode,
      headerMenuHandle: HEADER_MENU_HANDLE,
      footerMenuHandle: FOOTER_MENU_HANDLE,
    }
  });

  return (
    <>
      <Suspense>
        <Seo
          type="defaultSeo"
          data={{
            title: data.shop.name,
            description: data.shop.description,
          }}
        />
      </Suspense>
      <div className="flex flex-col min-h-screen antialiased bg-neutral-50">
        <Header/>
        <HeroSlider banner={data}/>
        <FeatureCollections/>
        <main role="main" id="mainContent" className="flex-grow">
          <Suspense fallback={null}>{children}</Suspense>
        </main>
      </div>
    </>
  );
}

const SHOP_QUERY = gql`
${MEDIA_FRAGMENT}
${PRODUCT_CARD_FRAGMENT}
query homepage($country: CountryCode, $language: LanguageCode)
@inContext(country: $country, language: $language) {
  shop: 
    shop {
      title: name
      description
    }
  heroBanners: collections(
    first: 1
    query: "collection_type:custom"
    sortKey: UPDATED_AT
  ) {
    nodes {
      id
      handle
      title
      descriptionHtml
      image{
        url
        id
      }
      heading: metafield(namespace: "hero", key: "title") {
        value
      }
      byline: metafield(namespace: "hero", key: "byline") {
        value
      }
      cta: metafield(namespace: "hero", key: "cta") {
        value
      }
      spread: metafield(namespace: "hero", key: "spread") {
        reference {
          ...Media
        }
      }
      spreadSecondary: metafield(namespace: "hero", key: "spread_secondary") {
        reference {
          ...Media
        }
      }
    }
  }
  featuredCollections: collections(
    first: 5
    query: "collection_type:smart"
    sortKey: UPDATED_AT
  ) {
    nodes {
      id
      title
      handle
      image {
        altText
        width
        height
        url
      }
    }
  }
  featuredProducts: products(first: 6) {
    nodes {
      ...ProductCard
    }
  }
}
`;
