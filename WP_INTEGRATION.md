# WordPress Integration Guide - Dodekanisa Glass

This codebase is optimized for Headless WordPress architecture or conversion into high-end Gutenberg blocks.

## 1. Headless Architecture

This React application can be used as the front-end "Head" for a WordPress site via the **WP REST API**.

### Dynamic Mapping

- **Product Catalog**: Map the `ServicesGrid` items to a "Products" Custom Post Type (CPT) in WordPress.
- **ACF Integration**: Use Advanced Custom Fields to manage technical specs (e.g., U-Value, Glass Type) and media assets.

## 2. Gutenberg Conversion

The components in `src/components` are designed as modular rows compatible with Gutenberg's block philosophy.

### Key Blocks:

- **Hero Block**: Configurable with background architectural photography and dual CTAs.
- **Service/Product Block**: Dynamic grid fetching from the "Products" post type.
- **Project Showcase**: Filterable gallery mapped to a "Portfolio" post type.

## 3. Deployment & Scaling

As a Vite-powered React app, it is ready for deployment on Vercel, Netlify, or as a static build within a WordPress theme directory.

## 4. Multilingual Readiness

While currently localized in high-quality Greek, the structure is ready for `i18next` integration should the business expand to English or other markets.

---

_Dodekanisa Glass — Building the Architecture of Light._
