import imageUrlBuilder from "@sanity/image-url";
export default function urlFor(source) {
    const builder = imageUrlBuilder(useSanity().config)
    return builder.image(source).auto('format')
}
