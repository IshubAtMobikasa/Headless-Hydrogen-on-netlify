import { Suspense } from "react";
import {
  useShopQuery,
  CacheLong,
  gql,
  Seo,
  useLocalization,
} from "@shopify/hydrogen";
import Header from "./Header/Header.client";
import HeroSlider from "./HeroSlider/HeroSlider.client";
import { MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT } from "../lib/fragment";
import FeatureCollections from "./FeatureCollections/FeatureCollections.client";
import MidBanner from "./MidBanner/MidBanner.client";
import BestSeller from "./BestSeller/BestSeller.client";
import Charity from "./Charity/Charity.client";
import Testimonial from "./Testimonial/Testimonial.client";
import FeatureUs from "./FeatureUs/FeatureUs.client";
import Footer from "./Footer/Footer.client";


const HEADER_MENU_HANDLE = "main-menu";
const FOOTER_MENU_HANDLE = "footer";
/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
export function Layout({ children }) {
  const {
    language: { isoCode: languageCode },
    country: { isoCode: countryCode },
  } = useLocalization();

  const { data } = useShopQuery({
    query: SHOP_QUERY,
    variables: {
      language: languageCode,
      headerMenuHandle: HEADER_MENU_HANDLE,
      footerMenuHandle: FOOTER_MENU_HANDLE,
    },
  });
  const {midBanner,BestSellerCollection,CharityBannerProduct,FooterMenu,HeaderMenu}=data
  // const { heroBanners,Acne,AntiAgening,DamagedHair,Dandruff,HairFall,Hydration,Hyperpigmentation,Regimes,SunProtection } = data;
  // const featureProductsData={Acne,AntiAgening,DamagedHair,Dandruff,HairFall,Hydration,Hyperpigmentation,Regimes,SunProtection}

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
        <Header menu={HeaderMenu} />
        <HeroSlider banner={data} />
        <FeatureCollections myData={data} />
        <MidBanner banner={midBanner}/>
        <BestSeller products={BestSellerCollection}/>
        <Charity product={CharityBannerProduct}/>
        <Testimonial/>
        <FeatureUs/>
        <Footer menu={FooterMenu}/>
        {/* <MidBanner banner={CharityBannerProduct}/> */}
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
    shop: shop {
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
        image {
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

    Acne: collection(id: "gid://shopify/Collection/274890850436") {
      products(first: 10) {
        nodes {
          title
          id
          featuredImage {
            id
            url
            altText
          }
        }
      }
    }
    SunProtection: collection(id: "gid://shopify/Collection/275141329028") {
      products(first: 10) {
        nodes {
          id
          title
          featuredImage {
            id
            url
            altText
          }
        }
      }
    }
    Hyperpigmentation: collection(id: "gid://shopify/Collection/275141787780") {
      products(first: 10) {
        nodes {
          title
          id
          featuredImage {
            id
            url
            altText
          }
        }
      }
    }
    Hydration: collection(id: "gid://shopify/Collection/275141853316") {
      products(first: 10) {
        nodes {
          title
          id
          featuredImage {
            id
            url
            altText
          }
        }
      }
    }
    AntiAgening: collection(id: "gid://shopify/Collection/275141886084") {
      products(first: 10) {
        nodes {
          title
          id
          featuredImage {
            id
            url
            altText
          }
        }
      }
    }
    HairFall: collection(id: "gid://shopify/Collection/275142049924") {
      products(first: 10) {
        nodes {
          title
          id
          featuredImage {
            id
            url
            altText
          }
        }
      }
    }
    Dandruff: collection(id: "gid://shopify/Collection/275142082692") {
      products(first: 10) {
        nodes {
          title
          id
          featuredImage {
            id
            url
            altText
          }
        }
      }
    }
    DamagedHair: collection(id: "gid://shopify/Collection/275142246532") {
      products(first: 10) {
        nodes {
          title
          id
          featuredImage {
            id
            url
            altText
          }
        }
      }
    }
    Regimes: collection(id: "gid://shopify/Collection/275142312068") {
      products(first: 10) {
        nodes {
          title
          id
          featuredImage {
            id
            url
            altText
          }
        }
      }
    }
    midBanner:product(id: "gid://shopify/Product/6907218296964"){
    title
    description
    featuredImage{
      url
      altText
      id
    }
  }
  BestSellerCollection:collection(id: "gid://shopify/Collection/275227836548"){
    title
    description
    image{
      url
      altText
    }
    products(first:15){
      nodes{
        id
        options(first:5){
          values
        }
        variants(first:3){
          nodes{
            title
          }
        }
        priceRange{
          maxVariantPrice{
            amount
          }
          minVariantPrice{
            amount
          }
          
        }
        title
        featuredImage {
          id
          url
          altText
        }
      }
    }
  }

  CharityBannerProduct:product(id: "gid://shopify/Product/6907982446724"){
    id
    title
    descriptionHtml
    description
    featuredImage{
      id
      url
      altText
    }
  }
  FooterMenu:menu(handle: "footer"){
    items{
      title
      id
      items{
        title
        id
      }
    }
  }
  HeaderMenu:menu(handle: "main-menu"){
    items{
      title
      id
      items{
        title
        id
        items{
          title
          id
        }
      }
    }
	}


  }
`;
