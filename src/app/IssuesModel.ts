export class IssueModel{
  id: string;
  _id: string;
  name: string;
  __v: string;

  constructor(p_Id: string, pId: string, pname: string, _pv: string) {
    this._id = p_Id;
    this.id = pId;
    this.name = pname;
    this.__v = _pv;
  }
}
