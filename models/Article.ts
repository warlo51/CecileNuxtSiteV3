class Article {
public createAt : string | undefined = undefined;
public fromSanity : boolean | undefined = undefined;
public image : string | undefined = undefined;
public titre : string | undefined = undefined;
public _createdAt : string | undefined = undefined;
public _id : string | undefined = undefined;
public _rev : string | undefined = undefined;
public _type : string | undefined = undefined;
public _updatedAt : string | undefined = undefined;
public phrase : [] | undefined = undefined;
public texte : [] | undefined = undefined;

    public constructor(obj: Partial<Article> = {}) {

        this.createAt = obj.createAt ? obj.createAt : undefined;
        this.fromSanity = obj.fromSanity ? obj.fromSanity : undefined;
        this.image = obj.image ? obj.image : undefined;
        this.titre = obj.titre ? obj.titre : undefined;
        this._createdAt = obj._createdAt ? obj._createdAt : undefined;
        this._id = obj._id ? obj._id : undefined;
        this._rev = obj._rev ? obj._rev : undefined;
        this._type = obj._type ? obj._type : undefined;
        this._updatedAt = obj._updatedAt ? obj._updatedAt : undefined;
        this.phrase = obj.phrase ? obj.phrase : undefined;
        this.texte = obj.texte ? obj.texte : undefined;
    }

}


export {
   Article
};
