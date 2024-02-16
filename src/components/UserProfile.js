import React from 'react'
import '../styles/UserProfile.css'
import UserProfileCard from './UserProfileCard'
import Niko from '../assets/Niko_Schweres.jpg'
import Svenja from '../assets/Svenja_Schweres.jpg'
import Hosts from '../assets/Hosts_Banner.png'


function UserProfile() {
  return (
    <div className='user'>
    <div className='hostsHeader'>
    <img src={Hosts} /></div>
    <h1>Die Podcast Hosts</h1>
    <p className='secondHeadline'>Wer steckt hinter brandit. dem Branding Podcast?</p>
    <div className='aboutHosts'>
      <p>
      <span className='hiOrange'>Hi</span>, dürfen wir uns vorstellen? Wir sind Svenja und Niko, die beiden hinter den Mikrofonen von brandit. Wir sind jedoch nicht nur Podcast-Hosts, sondern auch noch Geschäftspartner und ein Ehepaar. Gemeinsam ergänzen wir uns in allen Bereichen unseres Lebens und sind daher das perfekte Team. Aber lasst uns mal ein Stück zurückgehen, denn das war ja nicht immer so.
      <br />
      <br />
      Kennengelernt haben wir uns 2016. Damals hatte Svenja noch den Plan, etwas im Bereich Wirtschaft zu machen, während Niko tagtäglich als Kameramann Reportagen für das deutsche Fernsehen produzierte. Schon in der ersten Phase unserer Beziehung gestalteten wir gemeinsam kleine Passion-Projects. Im Laufe unserer Beziehung arbeiteten wir an vielen unterschiedlichen kreativen Projekten, sei es beruflich oder privat. Wir gestalteten zum Beispiel eine NFT-Kunstkollektion, produzierten Kochvideos für YouTube, nahmen Produktvideos im Wohnzimmer auf und schrieben ein Kochbuch. Wir genossen es, unsere gemeinsame Zeit mit kreativen Projekten zu gestalten. Und von Projekt zu Projekt wurden wir immer professioneller und mutiger.
      <br />
      <br />
      Wir belegten Kurse zum Thema Branding und lasen unendlich viele Bücher zu dem Thema. Wir erprobten unsere erlernten Fähigkeiten an unseren eigenen Projekten, gestalteten Logos, erschufen Corporate Designs und überlegten uns Content-Strategien. Das gemeinsame Arbeiten an Projekten in unserer Freizeit funktionierte super, und wir entschieden uns, dass wir auch in echt gerne zusammenarbeiten würden.
      <br />
      <br />
      Also stieg Svenja erstmal als redaktionelle Assistenz bei Nikos Firma ein und erlernte alles rund ums Produzieren von TV-Berichten. Zusammenarbeiten machte Spaß, doch wir beide wollten mehr. Wir wollten die Fähigkeiten, die wir in den letzten Jahren gelernt und verinnerlicht hatten, miteinander kombinieren, um Videocontent gezielt einzusetzen, um Unternehmen so zu branden, dass sie ihre Ziele erreichen können. Das sollte es sein. Also gründeten wir unsere eigene Firma mit unseren eigenen Werten und unserer eigenen Vision und Mission. Grey Mountains Media entstand.
      <br />
      <br />
      Wir wurden als neugegründete Firma unter anderem damit beauftragt, einen Videopodcast im True Crime-Segment zu produzieren. Wir übernahmen die Produktion, den Schnitt und das gesamte Social-Media-Marketing. Die Arbeit an dem Projekt machte unglaublich Spaß, und wir stellten uns die Frage, was für eine Art Podcast wir für unsere Firma produzieren könnten. brandit. - der Branding-Podcast, entstand. 
      <br />
      <br />
      Die Vision hinter brandit. ist klar: Gemeinsam möchten wir unseren Zuhörern dabei helfen, ihre Branding-Ziele zu erreichen. Gatekeeping war gestern – wir wollen unser Wissen über Branding mit allen teilen, die Interesse daran haben, sich weiterzuentwickeln und ihre Marken zu stärken.
      Zusätzlich schaffen wir Vertrauen zu unseren zukünftigen Kunden, indem wir unsere Expertise vermitteln, und wir haben ein neues Passion Project, das wir mit unserem geballten Know-how angehen können.
      </p>
    </div>
    <div className='userCard'>
      <UserProfileCard
      image={Niko}
      heading="Niko Schweres"
      text= "Niko Schweres begann 2006 seine Karriere als Kameramann. Seitdem arbeitete er an mehr als 1000 Reportagen für das deutsche Fernsehen. Im Jahr 2011 wurde er Co-Geschäftsführer bei telefacts.tv. 2023 gründete gemeinsam mit Svenja Schweres zusammen Grey Mountains. Mit ihrer Firma helfen sie Unternehmen auf dem Weg nach oben."
      button= <a href='https://www.instagram.com/nikoschweres/' target="_blank">
      <i className='fa-brands fa-instagram'></i></a>
      />
      <UserProfileCard
      image={Svenja}
      heading="Svenja Schweres"
      text= "Svenja Schweres ist eine erfahrene Videoproduzentin und Mitgründerin von Grey Mountains Media. Als Branding-Expertin bringt sie umfassende Kenntnisse in die Entwicklung und Vermarktung von Marken ein. Zusätzlich moderiert sie den Branding-Podcast brandit., der Einblicke und Tipps für eine erfolgreiche Markenbildung bietet."
      button=<a href='https://www.instagram.com/svenjakircher/' target="_blank">
      <i className='fa-brands fa-instagram'></i></a>
      />
    </div>
    </div>
  )
}

export default UserProfile