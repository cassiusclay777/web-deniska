/// <reference types="astro/client" />

declare global {
  namespace App {
    interface Locals {
      lang: 'cs' | 'en' | 'de';
    }
  }
}

export {};
