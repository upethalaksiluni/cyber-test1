import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import PageLoader from "../components/common/PageLoader";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Industries = lazy(() => import("../pages/Industries"));
const Frameworks = lazy(() => import("../pages/Frameworks"));
const FrameworkDetail = lazy(() => import("../pages/FrameworkDetail"));
const Insights = lazy(() => import("../pages/Insights"));
const Careers = lazy(() => import("../pages/Careers"));
const Contact = lazy(() => import("../pages/Contact"));
const Privacy = lazy(() => import("../pages/legal/Privacy"));
const Terms = lazy(() => import("../pages/legal/Terms"));
const NotFound = lazy(() => import("../pages/NotFound"));
const ExecutiveCyberLeadership = lazy(() => import("../pages/services/ExecutiveCyberLeadership"));
const ManagedITServices = lazy(() => import("../pages/services/ManagedITServices"));
const CyberComplianceAssurance = lazy(() => import("../pages/services/CyberComplianceAssurance"));
const AdversarySimulationTesting = lazy(() => import("../pages/services/AdversarySimulationTesting"));
const DigitalForensics = lazy(() => import("../pages/services/DigitalForensics"));
const AdvancedThreatDefense = lazy(() => import("../pages/services/AdvancedThreatDefense"));
const ApplicationInfrastructureSecurity = lazy(() => import("../pages/services/ApplicationInfrastructureSecurity"));
const DataProtectionPrivacy = lazy(() => import("../pages/services/DataProtectionPrivacy"));
const CyberLegalFinancialAssurance = lazy(() => import("../pages/services/CyberLegalFinancialAssurance"));
const SpecializedSecurityArchitecture = lazy(() => import("../pages/services/SpecializedSecurityArchitecture"));

function AppRoutes() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route element={<PageLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/executive-cyber-leadership" element={<ExecutiveCyberLeadership />} />
                    <Route path="/services/managed-it-services" element={<ManagedITServices />} />
                    <Route path="/services/cyber-compliance-assurance" element={<CyberComplianceAssurance />} />
                    <Route path="/services/adversary-simulation-testing" element={<AdversarySimulationTesting />} />
                    <Route path="/services/digital-forensics" element={<DigitalForensics />} />
                    <Route path="/services/advanced-threat-defense" element={<AdvancedThreatDefense />} />
                    <Route path="/services/application-infrastructure-security" element={<ApplicationInfrastructureSecurity />} />
                    <Route path="/services/data-protection-privacy" element={<DataProtectionPrivacy />} />
                    <Route path="/services/cyber-legal-financial-assurance" element={<CyberLegalFinancialAssurance />} />
                    <Route path="/services/specialized-security-architecture" element={<SpecializedSecurityArchitecture />} />
                    <Route path="/industries" element={<Industries />} />
                    <Route path="/frameworks" element={<Frameworks />} />
                    <Route path="/frameworks/:frameworkId" element={<FrameworkDetail />} />
                    <Route path="/insights" element={<Insights />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;