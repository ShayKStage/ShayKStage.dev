const AuthorAlias = (props) => {
  if (props.author.data.alias != undefined) {
    return <span className="author-alias">
        &nbsp;-&nbsp;<a href={`/authors/${props.author.data.alias}`}>Alias: {props.author.data.alias}</a>
      </span>
  } else {
    return <></>
  }
}

export default AuthorAlias;