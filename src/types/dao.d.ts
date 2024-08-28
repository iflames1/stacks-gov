export interface DAO {
  id: number;
  username: string;
  image: string;
  joined: boolean;
  proposals: PROPOSAL[];
}

interface PROPOSAL {
  author: string;
  author_dp: string;
  votes: VOTE;
  active: boolean;
  daysleft: number;
  topic: string;
  description: string;
}

interface VOTE {
  upvote: number;
  downvote: number;
}
