
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NGO_NAME } from '../constants';

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | {NGO_NAME}</title>
                <meta name="description" content={`Privacy Policy for ${NGO_NAME}. Learn how we collect, use, and protect your information.`} />
            </Helmet>
            <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
                <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
                    <div className="bg-slate-900 px-6 py-8 sm:px-10">
                        <h1 className="text-3xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
                        <p className="mt-2 text-rose-500 text-sm font-semibold uppercase tracking-wider">{NGO_NAME}</p>
                    </div>

                    <div className="px-6 py-10 sm:px-10 space-y-10 text-slate-700 leading-relaxed">

                        <section>
                            <p className="text-lg">
                                {NGO_NAME} respects the privacy of individuals who interact with us, including donors, beneficiaries, volunteers, and visitors to our website. We are committed to protecting personal information and handling it responsibly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-200">Information We Collect</h2>
                            <p className="mb-4">We may collect limited personal information when you:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-rose-500">
                                <li>Contact us via email or phone</li>
                                <li>Make a donation</li>
                                <li>Request support or assistance</li>
                                <li>Volunteer or collaborate with us</li>
                            </ul>
                            <p className="mt-4">
                                This information may include name, contact details, and other basic details required for coordination or record-keeping.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-200">How We Use Information</h2>
                            <p className="mb-4">Information collected is used solely to:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-rose-500">
                                <li>Communicate with donors, volunteers, and beneficiaries</li>
                                <li>Process donations and issue receipts where applicable</li>
                                <li>Coordinate support and assistance</li>
                                <li>Maintain internal records for transparency and accountability</li>
                            </ul>
                            <p className="mt-4 font-medium text-slate-900">
                                We do not sell, trade, or misuse personal information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-200">Data Protection & Confidentiality</h2>
                            <ul className="list-disc pl-6 space-y-2 marker:text-rose-500">
                                <li>Personal and sensitive information is handled with care and confidentiality</li>
                                <li>Any documents shared with us (medical records, school details, IDs) are used strictly for verification and support purposes</li>
                                <li>Access to such information is limited to authorized members of the Foundation</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-200">Images & Supporting Documents</h2>
                            <ul className="list-disc pl-6 space-y-2 marker:text-rose-500">
                                <li>Images or documents shared on our website (such as donation receipts, medical bills, or school-related documents) are displayed only for transparency and informational purposes.</li>
                                <li>Sensitive information is blurred or redacted to protect privacy.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-200">Third-Party Sharing</h2>
                            <p className="mb-4">We do not share personal information with third parties unless:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-rose-500">
                                <li>Required by law</li>
                                <li>Necessary for verification with institutions (schools, hospitals, etc.), and only with consent where applicable</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-200">Changes to This Policy</h2>
                            <p>
                                This privacy policy may be updated periodically to reflect changes in our practices or legal requirements. Updates will be posted on this page.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-200">Contact</h2>
                            <p>
                                If you have any questions about this policy or how your information is handled, please contact us through the details provided on our website.
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
