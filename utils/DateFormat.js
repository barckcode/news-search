const DateFormat = ({ publishedAt }) => {

	let date = publishedAt.slice(0, 10)

	return (
		<h5>
			{date}
		</h5>
	)
}

export default DateFormat

