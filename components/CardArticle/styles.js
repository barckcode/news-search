import styled from '@emotion/styled'

const ArticlesContainer = styled.main`
	padding: 0 2rem;
`

const Article = styled.article`
	margin-top: 2rem;
	border-radius: 20px;
	background-color: #ece9f7;
`

const Image = styled.img`
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
`

const TextContainer = styled.div`
	padding: 0 1.5rem 1.5rem 1.5rem;
`

const Title = styled.h2`
	margin-top: 1rem;
	line-height: 2rem;
`

const Description = styled.p`
	margin-top: 0.5rem;
	line-height: 1.5rem;
	text-align: justify;
`

const SourceContainer = styled.div`
	margin-top: 0.5rem;
	display: flex;

	span:nth-of-type(2) {
		display: none;
	}
`

const DateContainer = styled.div`
	margin-top: 0.5rem;
`

export {
	ArticlesContainer,
	Article,
	Image,
	TextContainer,
	Title,
	Description,
	SourceContainer,
	DateContainer,
}