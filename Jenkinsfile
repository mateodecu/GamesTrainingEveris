pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
        gitlabBuilds(builds: ["merge", "install", "test", "build"])
    }
    triggers {
        gitlab(
            triggerOnPush: false,
            triggerOnMergeRequest: true,
            triggerOpenMergeRequestOnPush: "both",
            triggerOnNoteRequest: true,
            noteRegex: "Jenkins please retry a build",
            skipWorkInProgressMergeRequest: true,
            ciSkip: true,
            setBuildDescription: true,
            addNoteOnMergeRequest: true,
            addCiMessage: true,
            cancelPendingBuildsOnUpdate: true,
            branchFilterType: "RegexBasedFilter",
            sourceBranchRegex: "",
            targetBranchRegex: "develop",
            acceptMergeRequestOnSuccess: false,
        )
    }
    stages {
        stage("merge") {
            steps {
                gitlabCommitStatus("merge") {
                    sh 'echo "merging"'
                    sh 'echo "Source branch ${gitlabSourceBranch}"'
                    sh 'echo "Target branch ${gitlabTargetBranch}"'
                }
            }
        }
        stage("install") {
            steps {
                gitlabCommitStatus("install") {
                    sh 'echo "installing"'
                }
            }
        }
        stage("test") {
            steps {
                gitlabCommitStatus("test") {
                    sh 'echo "testing"'
                }
            }
        }
        stage("build") {
            steps {
                gitlabCommitStatus("build") {
                    sh 'echo "building"'
                }
            }
        }
    }
    post {
        always{
            mail    to: 'maximiliano.tomasello@everis.com',// TODO: change this to front team
                    subject: "Pipeline ${JOB_NAME} Status",
                    body: "Build URL: ${BUILD_URL}"// TODO: Write a better body
        }
    }
}
