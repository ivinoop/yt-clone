import { HiUser } from 'react-icons/hi2'

const commentsData = [
  {
    name: 'Vinoo',
    comment: 'Lorem ipum dolor sit amet, consectetur adip',
    replies: [],
  },
  {
    name: 'Vinoo',
    comment: 'Lorem ipum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Vinoo',
        comment: 'Lorem ipum dolor sit amet, consectetur adip',
        replies: [
          {
            name: 'Vinoo',
            comment: 'Lorem ipum dolor sit amet, consectetur adip',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Vinoo',
    comment: 'Lorem ipum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Vinoo',
        comment: 'Lorem ipum dolor sit amet, consectetur adip',
        replies: [],
      },
    ],
  },
  {
    name: 'Vinoo',
    comment: 'Lorem ipum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Vinoo',
        comment: 'Lorem ipum dolor sit amet, consectetur adip',
        replies: [
          {
            name: 'Vinoo',
            comment: 'Lorem ipum dolor sit amet, consectetur adip',
            replies: [
              {
                name: 'Vinoo',
                comment: 'Lorem ipum dolor sit amet, consectetur adip',
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Vinoo',
    comment: 'Lorem ipum dolor sit amet, consectetur adip',
    replies: [],
  },
]

const Comment = ({ data }) => {
  const { name, comment, replies } = data
  return (
    <div className='flex items-center p-1 shadow-md rounded-md bg-slate-200 my-4'>
      <HiUser className='w-7 h-7 text-white bg-black p-1 rounded-full mr-2' />
      <div>
        <h4 className='text-md font-semibold'>{name}</h4>
        <p className='text-sm'>{comment}</p>
      </div>
    </div>
  )
}

const CommentsList = ({ comments }) => {
  // WARNING - Do not use index as key; this is just an example
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className='ml-8 '>
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ))
}

const CommentsContainer = () => {
  return (
    <div className='py-4'>
      <h2 className='text-2xl font-semibold my-4'>Comments:</h2>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer
