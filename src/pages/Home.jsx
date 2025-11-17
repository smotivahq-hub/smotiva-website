import HeroSection from '../components/home/HeroSection'
import ServicesOverview from '../components/home/ServicesOverview'
import WhyChoose from '../components/home/WhyChoose'

export default function Home(){
  return (
    <div className="font-body">
      <HeroSection />
      <ServicesOverview />
      <WhyChoose />
    </div>
  )
}
