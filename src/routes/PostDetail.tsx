import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface DetailProps {
    match: {
        params: {
            postSlug: string
        }
    }
}

export default class PostDetail extends Component<DetailProps>{
    constructor(props: DetailProps) {
        super(props);
    }
    render() {
        return (
            <div className="tab-pane fade active show" id="post-detail-pane">
                <div className="card">
                    <div className="card-header bg-transparent border-bottom">
                        <h6 className="card-title">
                            <Link to="/">
                                <i className="icon-arrow-left7"></i>
                                Go back to list
                            </Link>
                        </h6>
                    </div>
                    <div className="card-body">
                        <div className="mb-4">
                            <div className="mb-3 text-center">
                                <a href="#" className="d-inline-block">
                                    <img src="vendor/global_assets/images/demo/cover3.jpg" className="img-fluid" alt="" />
                                </a>
                            </div>

                            <h4 className="font-weight-semibold mb-1">
                                <a href="#" className="text-default">Content of this page has been taken from the template, all of them will be changed in the future</a>
                            </h4>

                            <ul className="list-inline list-inline-dotted text-muted mb-3">
                                <li className="list-inline-item">By <a href="#" className="text-muted">Eugene</a></li>
                                <li className="list-inline-item">July 5th, 2016</li>
                                <li className="list-inline-item"><a href="#" className="text-muted">12 comments</a></li>
                                <li className="list-inline-item"><a href="#" className="text-muted"><i className="icon-heart6 font-size-base text-pink-300 mr-2"></i> 281</a></li>
                            </ul>

                            <div className="mb-3">
                                <p>Attachment apartments in delightful by motionless it no. And now she burst sir learn total. Hearing hearted shewing own ask. Solicitude uncommonly use her motionless not collecting age. The properly servants required mistaken outlived bed and. Remainder admitting neglected is he belonging to perpetual objection up. Has widen too you decay begin which asked equal any.</p>

                                <p>Started his hearted any civilly. So me by marianne admitted speaking. Men bred fine call ask. Cease one miles truth day above seven. Suspicion sportsmen provision suffering mrs saw engrossed something. Snug soon he on plan in be dine some.</p>

                                <p>Death there mirth way the noisy merit. Piqued shy spring nor six though mutual living ask extent. Replying of dashwood advanced ladyship smallest disposal or. Attempt offices own improve now see. Called person are around county talked her esteem. Those fully these way nay thing seems.</p>
                            </div>

                            <div className="card card-body bg-light rounded-left-0 border-left-3 border-left-warning">
                                <blockquote className="blockquote d-flex mb-0">
                                    <div className="mr-3">
                                        <img className="rounded-circle" src="vendor/global_assets/images/demo/face1.jpg" width="46" height="46" alt="" />
                                    </div>

                                    <div>
                                        <p className="mb-1">Dear far dove lynx inaudibly between after under after on some far warthog.</p>
                                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </div>
                                </blockquote>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h5 className="font-weight-semibold">Insipidity the sufficient discretion</h5>

                            <p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consulted contained. It chicken oh colonel pressed excited suppose to shortly. He improve started no we manners however effects. Prospect humoured mistress to by proposal marianne attended. Simplicity the far admiration preference everything. Up help home head spot an he room in.</p>

                            <p>Unpleasant nor diminution excellence apartments imprudence the met new. Draw part them he an to he roof only. Music leave say doors him. Tore bred form if sigh case as do. Staying he no looking if do opinion. Sentiments way understood end partiality and his.</p>
                        </div>

                        <div>
                            <h5 className="font-weight-semibold">Out believe has request not how comfort evident</h5>

                            <p className="mb-3">Up delight cousins we feeling minutes. Genius has looked end piqued spring. Down has rose feel find man. Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.</p>

                            <div className="row">
                                <div className="col-lg-4">
                                    <ul className="list list-unstyled">
                                        <li>
                                            <i className="icon-checkmark3 text-success mr-2"></i>
                                            Style never met and those among great
                                  </li>
                                        <li>
                                            <i className="icon-checkmark3 text-success mr-2"></i>
                                            At no or september sportsmen
                                  </li>
                                        <li>
                                            <i className="icon-checkmark3 text-success mr-2"></i>
                                            Depending listening delivered
                                  </li>
                                        <li>
                                            <i className="icon-checkmark3 text-success mr-2"></i>
                                            Person plenty answer to exeter it
                                  </li>
                                    </ul>
                                </div>

                                <div className="col-lg-4">
                                    <ul className="list list-unstyled">
                                        <li>
                                            <i className="icon-checkmark3 text-success mr-2"></i>
                                            Law use assistance especially resolution
                                  </li>
                                        <li>
                                            <i className="icon-checkmark3 text-success mr-2"></i>
                                            Way necessary had intention happiness
                                  </li>
                                        <li>
                                            <i className="icon-checkmark3 text-success mr-2"></i>
                                            Furniture furnished or on strangers
                                  </li>
                                        <li>
                                            <i className="icon-checkmark3 text-success mr-2"></i>
                                            But why smiling man her imagine
                                  </li>
                                    </ul>
                                </div>

                                <div className="col-lg-4">
                                    <ul className="list list-unstyled">
                                        <li>
                                            <i className="icon-checkmark3 text-success mr-2"></i>
                                            Chiefly can man her out believe
                                  </li>
                                        <li>
                                            <i className="icon-checkmark3 text-success mr-2"></i>
                                            Solicitude it introduced companions
                                  </li>
                                        <li>
                                            <i className="icon-checkmark3 text-success mr-2"></i>
                                            My almost or horses period
                                  </li>
                                        <li>
                                            <i className="icon-checkmark3 text-success mr-2"></i>
                                            Motionless are six terminated man
                                  </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}