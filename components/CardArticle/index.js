// Components
import DateFormat from '../../utils/DateFormat'

// Styles
import {
	ArticlesContainer,
	Article,
	Image,
	TextContainer,
	Title,
	Description,
	SourceContainer,
	DateContainer,
} from './styles'

const CardArticle = ({ articles }) => {

	return (
		<ArticlesContainer>
			{articles.map(article => {

				const { urlToImage, title, description, source, author, url, publishedAt } = article

				return (
					<Article key={title}>
						<figure>
							<Image src={urlToImage} alt={title} />
						</figure>

						<TextContainer>
							<Title>{title}</Title>

							<Description>
								{description}
							</Description>

							<SourceContainer>
								<h4>{source.name}</h4>
								<span>&#x2502;</span>
								<h4>{author}</h4>
								<span>&#x2502;</span>
							</SourceContainer>

							<DateContainer>
								<DateFormat
									publishedAt={publishedAt}
								/>
							</DateContainer>

						</TextContainer>
					</Article>
				)
			})}
		</ArticlesContainer>
	)
}

export default CardArticle

