import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
} from 'graphql';
import {
  globalIdField,
} from 'graphql-relay';

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: globalIdField('Pokemon'),
    postId: {
      type: GraphQLInt,
      description: 'The identifier of this Comment',
      resolve: obj => obj.postId,
    },
    name: {
      type: GraphQLString,
      description: 'The name of this Comment',
      resolve: obj => obj.name,
    },
  })
})

export default CommentType;