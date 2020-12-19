import React from 'react'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import GraphQLErrorList from '../components/graphql-error-list'
import {responsiveTitle1} from '../components/typography.module.css'
import {paragraphe} from '../components/typography.module.css'







const AboutUsPage = props => {
    const {errors} = props

    if (errors) {
      return (
        <Layout>
          <GraphQLErrorList errors={errors} />
        </Layout>
      )
    }
    return(
        <Layout>
            <SEO title='About Us' />
            <Container>
                <h1 className={responsiveTitle1}>A propos</h1>
                <p classname={paragraphe} style={{whiteSpace:'break-spaces'}}>Bonsoir Jian,
                Je vais vous faire mon compte rendu sur cette page; cela devrait la remplit un petit peu plus :).
                
                Depuis mercredi je me renseigne sur le react, le node JS, github, Netlify.

                J'ai lu plusieurs fois l'exercice avant de reussir a comprendre, j'ai pas mal paniquer par manque d'experiences.
                
                J'ai crée plusieurs fois le template sur le site Sanity.io vus que je faisait pas mal de bétise en touchant a tout et en cherchant comment faire.
                
                Samedi matin j'ai enfin compris comment telecharger le clone github du site, j'ai reussi après pas mal d'essai et une absence total de connaissance a me servir du "terminal" de visual studio, je ne savais même pas dans quoi ouvrir les fichier,
                bref une véritablec catastrophe.
                
                Après avoir télécharger tout les plugin et outils necessaire ( NodeJs, Github desktop ) j'ai pus enfin attaquer les manipulation sur le code, avec un visuel immediat via l'utilisation du "npm run dev".
                
                A partir de la ce fut difficile, tres peu de notions de JS que je connaissait, des fichier tres dense beaucoup d'import et une obligation systématique de remonter les cheminement afin de comprendre a quoi sert chaque chose.
                
                Je me suis limiter au strict minimum que vous avez demander et n'ai pas chercher toutes les fonction / methode / variable qui m'était inconnu, car il y en avait trop. ( je les regarderai pendant les vaccances histoire d'avoir une petite idée et enrichir mes connaissances.
                
                Cet exercice ma pris en manipulation de code environ 10H, et en recherche et information environs 24h ( j'avoue ne pas avoir tout retenu de ce que j'ai lu des site en anglais)
                
                Merci pour l'exercice et l'entretien, j'espère que cela vous conviendra.
                
                Ps: je n'ai pas toucher au css et ai récupérer les import de style existant deja dans différent fichier.
                
                Merci encore a toute l'équipe de Koalita pour m'avoir donner ma chance :)
                
                *****Impossible de mettre des BR , balise ou autres "white-space" en css ou html pour aérer mon texte :( **** 
                j'ai encore beaucoup à apprendre</p>
                
                <div>
                    <img style={{position:'relative'},{width:'50%'},{marginLeft: '25%'}}
                        src="https://media.giphy.com/media/IWy60FY7KKOOc/giphy.gif "/>
                </div>
                
            </Container>
        </Layout>
    )
}

export default AboutUsPage

