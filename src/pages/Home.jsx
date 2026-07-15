import Hero from '../components/home/Hero'
import FeaturedProducts from '../components/home/FeaturedProducts'
import FeaturedCategories from '../components/home/FeaturedCategories'
import SeasonalCollection from '../components/home/SeasonalCollection'
import BrandStory from '../components/home/BrandStory'
import WhyChooseUs from '../components/home/WhyChooseUs'
import InstagramGallery from '../components/home/InstagramGallery'
import NewsletterSection from '../components/home/NewsletterSection'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <FeaturedCategories />
      <SeasonalCollection />
      <BrandStory />
      <WhyChooseUs />
      <InstagramGallery />
      <NewsletterSection />
    </>
  )
}
