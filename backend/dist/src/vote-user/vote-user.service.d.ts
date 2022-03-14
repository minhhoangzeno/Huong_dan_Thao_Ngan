import { Model } from 'mongoose';
import { VoteUser, VoteUserDocument } from './schemas/vote-user.schemas';
export declare class VoteUserService {
    private voteUserModel;
    constructor(voteUserModel: Model<VoteUserDocument>);
    findAll(): Promise<(VoteUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}
