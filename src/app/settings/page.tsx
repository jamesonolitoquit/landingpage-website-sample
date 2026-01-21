import { PageLayout } from "@/components/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings - Landing Page Sample",
  description: "Configure your account settings and preferences.",
};

export default function Settings() {
  return (
    <PageLayout>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Account Settings
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Notifications</h4>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center">
                      <input
                        id="email-notifications"
                        name="email-notifications"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="email-notifications" className="ml-2 block text-sm text-gray-900">
                        Email notifications
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="marketing-emails"
                        name="marketing-emails"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="marketing-emails" className="ml-2 block text-sm text-gray-900">
                        Marketing emails
                      </label>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-medium text-gray-900">Privacy</h4>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center">
                      <input
                        id="profile-visibility"
                        name="profile-visibility"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="profile-visibility" className="ml-2 block text-sm text-gray-900">
                        Make profile public
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="data-sharing"
                        name="data-sharing"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="data-sharing" className="ml-2 block text-sm text-gray-900">
                        Allow data sharing for analytics
                      </label>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-medium text-gray-900">Danger Zone</h4>
                  <div className="mt-2">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Delete Account
                    </button>
                    <p className="mt-2 text-sm text-gray-500">
                      Permanently delete your account and all associated data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}