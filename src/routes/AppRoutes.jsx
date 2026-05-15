import { Routes, Route } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Industries from "../pages/Industries";
import Frameworks from "../pages/Frameworks";
import FrameworkDetail from "../pages/FrameworkDetail";
import Insights from "../pages/Insights";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import Privacy from "../pages/legal/Privacy";
import Terms from "../pages/legal/Terms";
import NotFound from "../pages/NotFound";
import ExecutiveCyberLeadership from "../pages/services/ExecutiveCyberLeadership";
import ManagedITServices from "../pages/services/ManagedITServices";
import CyberComplianceAssurance from "../pages/services/CyberComplianceAssurance";
import AdversarySimulationTesting from "../pages/services/AdversarySimulationTesting";
import DigitalForensics from "../pages/services/DigitalForensics";
import AdvancedThreatDefense from "../pages/services/AdvancedThreatDefense";
import ApplicationInfrastructureSecurity from "../pages/services/ApplicationInfrastructureSecurity";
import DataProtectionPrivacy from "../pages/services/DataProtectionPrivacy";
import CyberLegalFinancialAssurance from "../pages/services/CyberLegalFinancialAssurance";
import SpecializedSecurityArchitecture from "../pages/services/SpecializedSecurityArchitecture";

function AppRoutes() {
    return (
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
    );
}

export default AppRoutes;