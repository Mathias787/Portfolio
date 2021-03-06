﻿using System.Web;
using System.Web.Optimization;

namespace Portfolio
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/custom-modernizr-*"));

            // Vendor bundles
            // Zepto
            bundles.Add(new ScriptBundle("~/bundles/vendor/zepto").Include(
                      "~/Scripts/vendor/zepto/zepto.js",
                      "~/Scripts/vendor/zepto/event.js",
                      "~/Scripts/vendor/zepto/ajax.js",
                      "~/Scripts/vendor/zepto/form.js",
                      "~/Scripts/vendor/zepto/ie.js"));

            // Magnific Popup
            bundles.Add(new ScriptBundle("~/bundles/vendor/magnific").Include(
                    "~/Scripts/vendor/magnific-popup/core.js",
                    "~/Scripts/vendor/magnific-popup/inline.js",
                    "~/Scripts/vendor/magnific-popup/gallery.js",
                    "~/Scripts/vendor/magnific-popup/retina.js",
                    "~/Scripts/vendor/magnific-popup/imagezoom.js"));

            // Photoswipe Popup
            bundles.Add(new ScriptBundle("~/bundles/vendor/photo-swipe").Include(
                    "~/Scripts/vendor/photo-swipe/photoswipe.js",
                    "~/Scripts/vendor/photo-swipe/photoswipe-ui-default.js"));

            // Site styles
            bundles.Add(new StyleBundle("~/bundles/css").Include(
                      "~/Content/css/normalize.css",
                      "~/Content/css/main.css"));

            // Home style bundle
            bundles.Add(new StyleBundle("~/bundles/sections/home").Include(
                      "~/Content/css/sections/sect-home.css"));

            // Photography bundle
            bundles.Add(new StyleBundle("~/bundles/sections/photography").Include(
                      "~/Content/css/sections/sect-photography.css"));

            // Vendor bundles

            // Photo-swipe
            bundles.Add(new StyleBundle("~/bundles/vendor/photo-swipe-css").Include(
                    "~/Scripts/vendor/photo-swipe/photoswipe.css",
                    "~/Scripts/vendor/photo-swipe/default-skin/default-skin.css"));
        }
    }
}
