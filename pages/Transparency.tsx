
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NGO_NAME } from '../constants';

const Transparency: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Transparency & Accountability | {NGO_NAME}</title>
                <meta name="description" content={`Transparency and Accountability at ${NGO_NAME}. Learn how we use donations and maintain records.`} />
            </Helmet>
            <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
                <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
                    <div className="bg-slate-900 px-6 py-8 sm:px-10">
                        <h1 className="text-3xl font-extrabold text-white tracking-tight">Transparency & Accountability</h1>
                        <p className="mt-2 text-emerald-400 text-sm font-semibold uppercase tracking-wider">{NGO_NAME}</p>
                    </div>

                    <div className="px-6 py-10 sm:px-10 space-y-10 text-slate-700 leading-relaxed">

                        <section>
                            <p className="text-lg">
                                At {NGO_NAME}, transparency and responsible use of funds are core to our values. We believe trust is built through openness, honesty, and ethical practices.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-200">Use of Donations</h2>
                            <p className="mb-4">All donations received are used solely for charitable and welfare purposes aligned with our mission, including:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                                <li>Educational support for underprivileged children</li>
                                <li>Assistance to registered ashrams and old age homes</li>
                                <li>Animal welfare initiatives such as feeding and medical care</li>
                            </ul>
                            <p className="mt-4 font-medium text-slate-900">
                                We aim to keep administrative expenses minimal so that maximum support reaches those in need.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-200">Documentation & Records</h2>
                            <p className="mb-4">We maintain internal records of:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                                <li>Donations received</li>
                                <li>Expenses incurred for charitable activities</li>
                                <li>Support provided across different initiatives</li>
                            </ul>
                            <p className="mt-4">
                                Donation receipts can be issued upon request.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-200">Activity Updates</h2>
                            <p className="mb-4">We share updates, photos, and summaries of our activities through:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                                <li>Our website</li>
                                <li>Official social media platforms</li>
                            </ul>
                            <p className="mt-4">
                                These updates help donors and supporters understand how contributions are making an impact.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-200">Use of Images & Documents</h2>
                            <p className="mb-4">Some images or documents displayed on our website may include:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                                <li>Blurred donation receipts</li>
                                <li>Redacted medical bills or school fee receipts</li>
                            </ul>
                            <p className="mt-4">
                                These are shared only to demonstrate transparency and impact. All sensitive or personal information is intentionally hidden to protect privacy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-200">Ethical Practices</h2>
                            <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                                <li>Support is provided based on genuine need and available resources</li>
                                <li>Requests for assistance may be reviewed and verified responsibly</li>
                                <li>We do not guarantee support and assess requests on a case-by-case basis</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-200">Continuous Improvement</h2>
                            <p>
                                As {NGO_NAME} grows, we are committed to improving our governance, documentation, and reporting practices while staying true to our values.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-200">Contact</h2>
                            <p>
                                If you have questions regarding our transparency practices or would like more information, please feel free to reach out to us.
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Transparency;
