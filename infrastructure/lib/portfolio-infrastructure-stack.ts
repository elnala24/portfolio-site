import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as amplify from '@aws-cdk/aws-amplify-alpha';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export class PortfolioInfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Get the GitHub token from Secrets Manager
    const githubToken = secretsmanager.Secret.fromSecretNameV2(
      this,
      'GitHubToken',
      'github-token-amplify'
    );

    // Create the Amplify app
    const amplifyApp = new amplify.App(this, 'PortfolioApp', {
      appName: 'alan-portfolio',
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'elnala24',
        repository: 'portfolio-site',
        oauthToken: githubToken.secretValue,
      }),
      buildSpec: cdk.aws_codebuild.BuildSpec.fromObjectToYaml({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: ['npm ci'],
            },
            build: {
              commands: ['npm run build'],
            },
          },
          artifacts: {
            baseDirectory: '.next',
            files: ['**/*'],
          },
          cache: {
            paths: ['node_modules/**/*'],
          },
        },
      }),
      platform: amplify.Platform.WEB_COMPUTE,
    });

    // Add the main branch
    const mainBranch = amplifyApp.addBranch('main', {
      autoBuild: true,
      stage: 'PRODUCTION',
    });

    // Output the app URL
    new cdk.CfnOutput(this, 'AmplifyAppURL', {
      value: `https://main.${amplifyApp.defaultDomain}`,
      description: 'Amplify App URL',
    });
  }
}
